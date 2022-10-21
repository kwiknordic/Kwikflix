import { data } from "./model.js"
import * as view from "./view.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import * as footer from "../footer/controller.js"

function init() {
  view.addAttributes(data.id, data.mediaType)
  view.addBackgroundPic(data)
  view.addTextContent(data)
  footer.init()
  eventDelegation()
}

init()