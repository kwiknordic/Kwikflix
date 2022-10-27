import { isEntryAdded } from "../../helpers/isEntryAdded.js"

let container = document.querySelector("#hero-section")

export function render(dataObj) {
  let { id, mediaType } = dataObj

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addAttributes(id, mediaType)
  disableButton(id)
}

function disableButton(id) {
  if (!isEntryAdded(id)) return;
  let button = document.querySelector("#add-to-list")
  button.disabled = "true"
}

function addAttributes(id, media) {
  container.dataset.id = id
  container.dataset.media = media
}

function addBackgroundPic({ imgSizes, imgURL, backdrop }) {
  let imgSize = imgSizes.at(-1)
  container.parentElement.style.backgroundImage = `url("${imgURL}${imgSize}${backdrop}"`
}

function addTextContent({ title, overview }) {
  let titleElem = container.querySelector("h2")
  let overviewElem = container.querySelector("p")
  titleElem.dataset.linkForward = true
  titleElem.textContent = title
  overviewElem.textContent = overview
}