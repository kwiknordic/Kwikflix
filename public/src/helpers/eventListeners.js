import { storeRequest } from "../details/controller.js"
import { saveEntry } from "../list/controller.js"
import { showTrailerModal } from "./trailerModal.js"
import { showTemplate, submitSearch } from "../helpers/searchModal.js"
import { getAttributeNameOf } from "./getAttributeNameOf.js"

export function eventDelegation() {
  document.addEventListener("click", e => {
    let el = e.target

    // if #Watch-Trailer button is clicked
    if (el.id == "watch-trailer") {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      showTrailerModal(id, media)
      return;
    }

    // if #Add-to-list button is clicked
    if (el.id == "add-to-list") {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      let status = "TBS"
      saveEntry(id, media, status)
      el.disabled = "true"
      return;
    };

    // if Search-icon is clicked
    const searchButtonClasses = ["fa-magnifying-glass", "search"];
    if (searchButtonClasses.some(className => el.classList.contains(className))) {
      showTemplate()
      return;
    }

    // if Search-button is submitted
    if (el.id === "submitSearch") {
      submitSearch(el)
      return;
    }

    //remove modal when clicked outside of content
    const activeModalClass = ["modalView", "close"];
      if (activeModalClass.some(className => el.classList.contains(className))) {
      document.body.classList.toggle("overflow-hidden")
      el.closest("div").remove()
      return;
    }

    // redirect to page with more info
    if (hasLinkForward(el)) {
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      storeRequest(id, media)
      return;
    }

    // toggle attribute based on filter for MutationObserver
    if (e.target.closest("li")) {
      let listItem = e.target.textContent.toLowerCase()
      let container = e.target.closest("aside")
      container.dataset.filter = getAttributeNameOf(listItem)
      return;
    }

    // Handle actionButtons in MyList-page
    if (e.target.parentElement.classList.contains("actions")) {
      let btn = e.target
      let result = getAttributes(el, "data-id")
      if (!result) return;
      let { id, media } = result
      let status;

      let archiveBtns = ["archive-button", "unset-button", "trash-button"]
      if (archiveBtns.some(cls => btn.classList.contains(cls))) {
        updateArchiveStatus()
        return
      }

      function updateArchiveStatus() {
        btn.classList.contains("archive-button") ?
          status = "archived" :
        btn.classList.contains("unset-button") ?
          status = "TBS" :
          status = "trash"
  
        let entry = result.elem
        entry.dataset.status = status
        saveEntry(id, media, status)
      }
    }

  })

  document.addEventListener("keyup", e => {
    let el = e.target
    if (!el.closest("input")) return;

    // if ENTER-key is hit as searchSubmit
    if (e.key === "Enter") {
      submitSearch(el)
      return;
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
      media: element.dataset.media,
      elem: element,
     }
  }
  
  return getAttributes(element.parentElement, attribute)
}