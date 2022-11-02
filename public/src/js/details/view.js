import { addRatingStars } from "../helpers/addRatingStars.js"
import { isEntryAdded } from "../helpers/isEntryAdded.js"
import { containerWidth } from "../helpers/containerWidth.js"

let mainElem = document.querySelector("main")

function addAttributes(id, type) {
  mainElem.dataset.id = id
  mainElem.dataset.media = type
}

function disableButton(id) {
  let button = document.querySelector("#add-to-list")
  if (isEntryAdded(id)) {
    button.disabled = "true"
    return
  }
  button.removeAttribute("disabled")
}

function showPoster({ title, imgURL, poster }) {
  const container = document.querySelector("aside")
  const image = document.body.querySelector("img")
  image.alt = title
  image.src = `${imgURL}${containerWidth(container)}${poster}`
}

function showContent(
  { title, 
    overview, 
    rating, 
    votes, 
    releaseDate, 
    runTime, 
    genres 
  }) {

  // linked variables to HTMLElements
  let titleElem = mainElem.querySelector("h1")
  let overviewElem = mainElem.querySelector("p")
  let ratingElem = document.getElementById("rating")
  let votesElem = document.getElementById("votes")
  let releaseElem = document.getElementById("release")
  let runtimeElem = document.getElementById("runtime")
  let genresElem = document.getElementById("genres")

  // content added to HTMLElements
  document.title = title
  titleElem.textContent = title
  overviewElem.textContent = overview
  ratingElem.innerHTML = addRatingStars(rating)
  votesElem.textContent = `${votes} votes`
  releaseElem.textContent = `${releaseDate}`
  runtimeElem.textContent = `${runTime} minutes`

  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)
}

export { 
  addAttributes, 
  showPoster, 
  showContent, 
  disableButton,
 }