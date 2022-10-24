import { data } from "./model.js"
import * as view from "./view.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { init as footer } from "../footer/controller.js"

function initialize() {
  if (!window.location.pathname.includes("details")) return;

  view.addAttributes(data.id, data.mediaType)
  view.addBackgroundPic(data)
  view.addTextContent(data)
  view.disableButton(data.id)
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