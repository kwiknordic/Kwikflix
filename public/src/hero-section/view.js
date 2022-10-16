import { showTrailerModal } from "../helpers/showTrailer.js"

export function render(dataObj) {

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addId(dataObj.id)
  getTrailer(dataObj)
}

let container = document.querySelector("#hero-section")

function getTrailer({ videos }) {
  let youtubeURL = "https://www.youtube-nocookie.com/embed/"

  let video = videos
    .filter(video => {

      if (video.site != "YouTube") return;
      if (video.iso_639_1 != "en") return;
      if (video.type != "Trailer") return;
      return video
    })
    .map(video => video.key)

  let chooseRandom = Math.floor(Math.random() * video.length)

  let button = container.querySelector("#watch-trailer")
  button.addEventListener("click", e => {
    showTrailerModal(youtubeURL + video[chooseRandom])
  })

  return button
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