import { footerMenuLinks } from "./model.js"
import * as view from "./view.js"

const renderFooter = function() {
  view.addLinks(footerMenuLinks)
  view.makeResponsive()
  view.copyRightPlaceholder()
}

export { renderFooter }