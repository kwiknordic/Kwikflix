import { response } from "./model.js"
import * as view from "./view.js"
import { renderFooter } from "../components/footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

const renderEntries = function() {
  try {
    response.forEach(entry => {
      view.renderEntryElements(entry)
      view.populateEntryContent(entry)
    })
  } catch (err) {
    view.noRenderMessage()
  }
}

const initialize = function() {
  if (!window.location.pathname.includes("search")) return;
  
  renderEntries()
  eventDelegation()
  filterObserver("data-media")
  renderFooter()
}

// Run
initialize()