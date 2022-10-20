import { getTrailer } from "../../helpers/showTrailer.js"
import { saveEntry } from "../../helpers/addToList.js"
import { renderDetails } from "../../helpers/renderDetails.js"

let container = document.querySelector("#hero-section")

export function render(dataObj) {

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addAttributes(dataObj.id, dataObj.mediaType)
  getTrailer(container, dataObj.videos)
  eventListeners(dataObj)
}

function eventListeners(dataObj) {
  document.addEventListener("click", e => {
    if (e.target.id !== "add-to-list") return;
    saveEntry(dataObj.id, dataObj.mediaType)
    e.target.disabled = "true"
  })
}

function addAttributes(id, type) {
  container.dataset.id = id
  container.dataset.media = type
  return container
}

function addBackgroundPic({ imgSizes, imgURL, backdrop }) {
  let imgSize = imgSizes.at(-1)

  container.style.backgroundImage = `url("${imgURL}${imgSize}${backdrop}"`
  return container
}

function addTextContent({ title, overview }) {
  let titleElem = container.querySelector("h2")
  titleElem.textContent = title

  // request detailed-page if title is clicked
  titleElem.addEventListener("click", e => {
    let container = e.target.closest("div")
    renderDetails(container.dataset.id, container.dataset.media)
  })

  let overviewElem = container.querySelector("p")
  overviewElem.textContent = overview
  return { titleElem, overviewElem }
}