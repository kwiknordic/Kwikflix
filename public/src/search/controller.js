import { results } from "./model.js"
import * as view from "./view.js"
import { init as footer } from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

function initialize() {
  if (!window.location.pathname.includes("search")) return;

  if (!results) return;
  results.forEach(entry => {
    view.render(entry)
  })

  eventDelegation()
  filterObserver("data-media")
  footer()
}

export function storeSearch(results) {
  localStorage.setItem('searchQuery', JSON.stringify(results))
  window.location.assign("./search.html")
}

initialize()