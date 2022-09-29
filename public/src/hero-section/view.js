export function render(dataObj) {

  addBackgroundPic(dataObj)
  addTextContent(dataObj)
  addId(dataObj.id)
  addTrailer(dataObj.videos)
}

let container = document.querySelector("#hero-section")

function addTrailer(videos) {
  let youtubeURL = "https://www.youtube.com/watch?v="

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
  let linkElem = button.parentElement
  linkElem.href = youtubeURL + video[chooseRandom]
  linkElem.target = "_blank"

  return button.parentElement
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