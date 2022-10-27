import { addRatingStars } from "../helpers/addRatingStars.js"
import { isEntryAdded } from "../helpers/isEntryAdded.js"

let mainElem = document.querySelector("article")

function addAttributes(id, type) {
  mainElem.dataset.id = id
  mainElem.dataset.media = type
}

function disableButton(id) {
  if (!isEntryAdded(id)) return;
  let button = document.querySelector("#add-to-list")
  button.disabled = "true"
}

function showPoster({ title, imgSizes, imgURL, poster }) {
  let image = document.body.querySelector("img")

  // imgsize, TODO: use different sizes depending on media-screen
  let size = imgSizes.at(-1)
  
  image.alt = title
  image.src = `${imgURL}${size}${poster}`
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