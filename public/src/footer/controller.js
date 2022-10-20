import { footerMenuLinks } from "./model.js"
import * as render from "./view.js"

export function init() {
  render.addLinks(footerMenuLinks)
  render.makeResponsive()
  render.copyRightPlaceholder()
}