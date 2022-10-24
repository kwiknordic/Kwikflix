import { addRatingStars } from "../helpers/addRatingStars.js"
import { isEntryAdded } from "../helpers/addToList.js"

let mainElem = document.querySelector("article")

function addAttributes(id, type) {
  mainElem.dataset.id = id
  mainElem.dataset.media = type
  return mainElem
}

function disableButton(id) {
  if (!isEntryAdded(id)) return;
  let button = document.querySelector("#add-to-list")
  button.disabled = "true"
}

function addBackgroundPic({ title, imgSizes, imgURL, poster }) {
  let container = document.querySelector(".poster")
  let image = container.querySelector("img")

  // imgsize, TODO: use different sizes depending on media-screen
  let imgSize = imgSizes.at(-1)

  image.src = `${imgURL}${imgSize}${poster}`
  image.alt = title
  return image
}

function addTextContent({ title, overview, rating, count, releaseDate, runTime, genres }) {
  let titleElem = document.querySelector("h1")
  let overviewElem = mainElem.querySelector("p")
  let ratingElem = document.getElementById("rating")
  let countElem = document.getElementById("count")
  let releaseElem = document.getElementById("release")
  let runtimeElem = document.getElementById("runtime")
  let genresElem = document.getElementById("genres")

  // add title and summary
  document.title = title
  titleElem.textContent = title
  overviewElem.textContent = overview

  // add rating and count
  ratingElem.innerHTML = addRatingStars(rating)
  countElem.textContent = `${count} votes`

  // add subheading (runtime, release)
  // TODO: code "N/A" as fallback
  releaseElem.textContent = `${releaseDate}`
  runtimeElem.textContent = `${runTime} minutes`

  // populate with genres
  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)
}

export { 
  addAttributes, 
  addBackgroundPic, 
  addTextContent, 
  disableButton
 }