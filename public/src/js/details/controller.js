import { result } from "./model.js"
import * as view from "./view.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { renderFooter } from "../components/footer/controller.js"

const renderEntries = function() {
  try {
    view.addAttributes(result.id, result.media)
    view.showPoster(result)
    view.showContent(result)
    view.disableButton(result.id)
  } catch (e) {
    window.location.assign("./")
  }
}

function initialize() {
  if (!window.location.pathname.includes("details")) return;

  renderEntries()
  renderFooter()
  eventDelegation()
}

// Run
initialize()

// Save request when triggered by EventListener
export function storeRequest(id, media) {
  localStorage.setItem('reqData', JSON.stringify({id, media}))
}