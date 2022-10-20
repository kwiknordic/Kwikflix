import { getTrailer } from "../../helpers/showTrailer.js"

let container = document.querySelector("#hero-section")

export function render(dataObj) {

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addId(dataObj.id)
  getTrailer(container, dataObj.videos)
}

function addId(id) {
  container.dataset.id = id
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

  let overviewElem = container.querySelector("p")
  overviewElem.textContent = overview
  return { titleElem, overviewElem }
}