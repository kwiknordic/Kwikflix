import { data } from "./model.js"
import * as view from "./view.js"
import * as footer from "../footer/controller.js"

function init() {
  view.addBackgroundPic(data)
  view.addTextContent(data)
  footer.init()
}

init()