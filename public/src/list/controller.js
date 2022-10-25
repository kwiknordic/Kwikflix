import { userList } from "./model.js"
import * as view from "./view.js"
import { init as footer } from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

function initialize() {
  if (!window.location.pathname.includes("list")) return;

  if (!userList) return;
  Promise.all(userList).then( results => {
    results.forEach(entry => {
      view.renderEntryElements(entry)
      view.populateEntryContent(entry)
    })
  })

  eventDelegation()
  filterObserver("data-status")
  footer()
}

initialize()