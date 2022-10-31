import * as model from "./model.js"
import * as view from "./view.js"
import { init as footer } from "../footer/controller.js"
import { showNotification } from "../helpers/notificationBar.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

const initialize = function() {
  if (!window.location.pathname.includes("list")) return;
  renderEntries()
  eventDelegation()
  filterObserver("data-status")
  footer()
}

function renderEntries() {
  try {
    const userList = model.getUserList()
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

function buttonActionsObserver(id) {
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

function saveEntry(id, media, status) {
  let userList;
  let newEntry = {
    id: Number(id),
    data: { id, media, status }
  }

  // First time
  if (!model.getRawUserList()) {
    userList = [newEntry]
    model.setRawUserList(userList)
    return
  }

  // Repeating times
  let database = model.getRawUserList()
  const uniqueEntries = database.filter(entry => entry.id !== newEntry.id)

  userList = [...uniqueEntries, newEntry]
  model.setRawUserList(userList)
}

function removeEntry(id) {
  let userList = model.getRawUserList()
  userList = userList.filter(entry => entry.id !== id)
  model.setRawUserList(userList)
}

initialize()

export {
  saveEntry,
  removeEntry,
}