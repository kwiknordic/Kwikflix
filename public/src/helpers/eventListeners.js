import { renderDetails } from "../helpers/renderDetails.js"
import { saveEntry } from "../helpers/addToList.js"
import { showTrailerModal } from "./trailerModal.js"
import { showTemplate } from "../helpers/searchModal.js"
import { searchKeywords } from "../api/getResponse.js"

export function eventDelegation() {
  document.addEventListener("click", e => {
    let el = e.target

    // if #Watch-Trailer button is clicked
    if (el.id == "watch-trailer") {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      showTrailerModal(id, media)
    }

    // if #Add-to-list button is clicked
    if (el.id == "add-to-list") {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      saveEntry(id, media)
      el.disabled = "true"
    };

    // if Search-icon is clicked
    const searchButtonClasses = ["fa-magnifying-glass", "search"];
    if (searchButtonClasses.some(className => el.classList.contains(className))) {
      showTemplate()
    }

    // if Search-button is submitted
    if (el.id === "submitSearch") {
      let container = el.closest("div")
      let input = container.querySelector("input")
      let query = input.value
      searchKeywords(query).then( result => console.log(result))
    }

    //remove modal when clicked outside of content
    const activeModalClass = ["modalView", "close"];
      if (activeModalClass.some(className => el.classList.contains(className))) {
      el.closest("div").remove()
    }

    // redirect to page with more info
    if (hasLinkForward(el)) {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      renderDetails(id, media)
    }
  })
}

function hasLinkForward(element) {
  if (element == null) return
  if (element.tagName == body) return
  if (element.dataset.linkForward) return true
  return hasLinkForward(element.parentElement)
}

function getAttributes(element, attribute) {
  if (element == null) return
  if (element.tagName == "body") return
  if (element.getAttribute(attribute)) {
    return { 
      id: Number(element.dataset.id), 
      media: element.dataset.media
     }
  }
  return getAttributes(element.parentElement, attribute)
}