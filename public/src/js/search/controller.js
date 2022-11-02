import { response } from "./model.js"
import * as view from "./view.js"
import { init as footer } from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

function initialize() {
  if (!window.location.pathname.includes("search")) return;

  try {
    response.forEach(entry => {
      view.renderEntryElements(entry)
      view.populateEntryContent(entry)
    })
  } catch (err) {
    view.noRenderMessage()
  }

  eventDelegation()
  filterObserver("data-media")
  footer()
}

export function storeSearch(response) {
  localStorage.setItem('searchQuery', JSON.stringify(response))
  window.location.assign("./search.html")
}

initialize()