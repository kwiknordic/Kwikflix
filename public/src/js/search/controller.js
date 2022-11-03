import { response } from "./model.js"
import * as view from "./view.js"
import { showCategoryCount } from "../helpers/showCategoryCount.js"
import { renderFooter } from "../components/footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"
import { filterObserver } from "../helpers/filterObserver.js"

const renderEntries = function() {
  try {
    response.forEach(entry => {
      view.renderEntryElements(entry)
      view.populateEntryContent(entry)
    })
  } catch (err) {
    view.noRenderMessage()
  }
}

const categoryCount = function() {
  const searchResults = Array.from(document.querySelectorAll("[data-media]"))

  const countStatus = searchResults
    .map(entry => entry.getAttribute("data-media"))
    .reduce((total, status, index) => {
      const count = total[status] ?? 0;
      return {
        ...total,
        [status]: count +1,
        ["all"]: index +1
      }
    }, {})

  showCategoryCount(countStatus)
}

const initialize = function() {
  if (!window.location.pathname.includes("search")) return;
  
  renderEntries()
  categoryCount()
  eventDelegation()
  filterObserver("data-media")
  renderFooter()
}

// Run
initialize()