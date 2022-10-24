import { footerMenuLinks } from "./model.js"
import * as view from "./view.js"

export function init() {
  view.addLinks(footerMenuLinks)
  view.makeResponsive()
  view.copyRightPlaceholder()
}