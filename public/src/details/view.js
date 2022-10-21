import { addRatingStars } from "../helpers/addRatingStars.js"

let pageTitle = document.head.querySelector("title")
let posterElem = document.querySelector(".poster")
let mainElem = document.querySelector("article")

function addAttributes(id, type) {
  mainElem.dataset.id = id
  mainElem.dataset.media = type
  return mainElem
}

function addBackgroundPic({ title, imgSizes, imgURL, poster }) {
  let imgElem = posterElem.querySelector("img")

  // imgsize, TODO: use different sizes depending on media-screen
  let imgSize = imgSizes.at(-1)

  imgElem.src = `${imgURL}${imgSize}${poster}`
  imgElem.alt = title

  return imgElem
}

function addTextContent({ title, overview, rating, count, releaseDate, runTime, genres }) {
  let heading = mainElem.querySelector(".heading")

  // add title
  let titleElem = heading.querySelector("h1")
  titleElem.textContent = title
  pageTitle.textContent = title

  // add overview
  let overviewElem = mainElem.querySelector("p")
  overviewElem.textContent = overview

  // add rating and count
  let ratingsDiv = heading.querySelector(".ratings")
  let ratingElem = ratingsDiv.querySelector("#rating")
  let countElem = ratingsDiv.querySelector("#count")

  ratingElem.outerHTML = addRatingStars(rating)
  countElem.textContent = `${count} votes`

  // add subheading (runtime, release)
  let subHeader = mainElem.querySelector(".subheading")
  let releaseElem = subHeader.querySelector("#release")
  let runtimeElem = subHeader.querySelector("#runtime")

  // TODO: code "N/A" as fallback
  releaseElem.textContent = `${releaseDate}`
  runtimeElem.textContent = `${runTime} minutes`

  // populate with genres
  let genresElem = mainElem.querySelector("#genres")
  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)

  return { titleElem, overviewElem }
}

export { addAttributes, addBackgroundPic, addTextContent }