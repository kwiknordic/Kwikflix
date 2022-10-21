let container = document.querySelector("#hero-section")

export function render(dataObj) {
  let { id, mediaType } = dataObj

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addAttributes(id, mediaType)
}

function addAttributes(id, media) {
  container.dataset.id = id
  container.dataset.media = media
  return container
}

function addBackgroundPic({ imgSizes, imgURL, backdrop }) {
  let imgSize = imgSizes.at(-1)

  container.style.backgroundImage = `url("${imgURL}${imgSize}${backdrop}"`
  return container
}

function addTextContent({ title, overview }) {
  let titleElem = container.querySelector("h2")
  let overviewElem = container.querySelector("p")
  titleElem.dataset.linkForward = true
  titleElem.textContent = title
  overviewElem.textContent = overview

  return { titleElem, overviewElem }
}