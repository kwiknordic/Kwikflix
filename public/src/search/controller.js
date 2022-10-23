import { results } from "./model.js"
import * as view from "./view.js"
import * as footer from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"

function init() {
  if (!results) return;
  results.forEach(entry => {
    view.render(entry)
  })
}

function observer() {
  let targetNode = document.querySelector("aside")
  const observer = new MutationObserver( e => {
    let target = e.at(-1).target
    let mutatedAttr = e.at(-1).attributeName
    let attribute = target.getAttribute(mutatedAttr)
    view.filter(attribute)
  });
  observer.observe(targetNode, { attributes: true });
}

eventDelegation()
observer()
init()
footer.init()