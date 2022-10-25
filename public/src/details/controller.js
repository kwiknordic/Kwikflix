import { result } from "./model.js"
import * as view from "./view.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { init as footer } from "../footer/controller.js"

function initialize() {
  if (!window.location.pathname.includes("details")) return;
  if (!result) return;

  view.addAttributes(result.id, result.media)
  view.showPoster(result)
  view.showContent(result)
  view.disableButton(result.id)

  footer()
  eventDelegation()
}

export function storeRequest(id, media) {
  let reqData = {
    id,
    media,
    }

  localStorage.setItem('reqData', JSON.stringify(reqData))
  window.location.assign("./details.html")
}

initialize()