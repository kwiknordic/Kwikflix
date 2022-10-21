import { renderDetails } from "../helpers/renderDetails.js"
import { saveEntry } from "../helpers/addToList.js"
import { showTrailerModal } from "../helpers/showTrailer.js"

export function eventDelegation() {
  document.addEventListener("click", e => {

  // if #Watch-Trailer button is clicked
  if (e.target.id == "watch-trailer") {
    let result = getAttributes(e.target)
    if (!result) return;
    let { id, media } = result
    showTrailerModal(id, media)
  }

  // if #Add-to-list button is clicked
  if (e.target.id == "add-to-list") {
    let result = getAttributes(e.target)
    if (!result) return;
    let { id, media } = result
    saveEntry(id, media)
    e.target.disabled = "true"
  };

  //remove trailer-popup when clicked on background
  if (e.target.id === "modal-trailerView") {
    e.target.closest("div").remove()
  }

  // redirect to page with more info
  if (hasLinkForward(e.target)) {
    let result = getAttributes(e.target)
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

function getAttributes(element) {
  if (element == null) return
  if (element.tagName == "body") return
  if (element.dataset.id) {
    return { 
      id: Number(element.dataset.id), 
      media: element.dataset.media
     }
  }
  return getAttributes(element.parentElement)
}