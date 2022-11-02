import * as model from "./model.js"
import * as view from "./view.js"
import { renderFooter } from "../components/footer/controller.js"
import { showNotification } from "../components/notificationBar.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

const renderEntries = function() {
  try {
    const userList = model.mappedUserList()
    Promise.all(userList).then( results => {
      results.forEach(entry => {
        view.renderEntryElements(entry)
        view.populateEntryContent(entry)
        view.toggleActionBtn(entry.id, entry.status)
        buttonActionsObserver(entry.id)
      })
    })
  } catch (e) {
    view.noRenderMessage()
  }
}

const initialize = function() {
  if (!window.location.pathname.includes("list")) return;
  renderEntries()
  eventDelegation()
  filterObserver("data-status")
  renderFooter()
}

// Run
initialize()

const buttonActionsObserver = function(id) {
  const entry = document.querySelector(`[data-id="${id}"]`)

  const observer = new MutationObserver( e => {
    const mutatedAttr = e.at(-1)
    const target = mutatedAttr.target
    const attribute = mutatedAttr.attributeName
    const id = target.dataset.id
    const status = target.dataset.status

    if (attribute !== "data-status") return;
    view.toggleActionBtn(id, status)
    showNotification(status)
  });

  observer.observe(entry, { attributes: true });
}

// Saving/deleting listEntries used by EventListeners
export const handleListEntries = {
  saveEntry: function(id, media, status) {
    let userList;
    let newEntry = {
      id: Number(id),
      data: { id, media, status }
    }
  
    // First time
    if (!model.unmodifiedUserList.get()) {
      userList = [newEntry]
      model.unmodifiedUserList.set(userList)
      return
    }
  
    // Repeating times
    let database = model.unmodifiedUserList.get()
    const uniqueEntries = database.filter(entry => entry.id !== newEntry.id)
  
    userList = [...uniqueEntries, newEntry]
    model.unmodifiedUserList.set(userList)
  },
  
  removeEntry: function(id) {
    let userList = model.unmodifiedUserList.get()
    userList = userList.filter(entry => entry.id !== id)
    model.unmodifiedUserList.set(userList)
  }
}