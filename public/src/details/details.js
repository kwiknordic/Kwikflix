import { data } from "./model.js"

let pageTitle = document.head.querySelector("title")
let posterElem = document.querySelector(".poster")
let mainElem = document.querySelector("article")

//view
addBackgroundPic(data)
function addBackgroundPic({ imgSizes, imgURL, poster }) {
  let imgSize = imgSizes.at(-1)

  //posterElem.src = `${imgURL}${imgSize}${poster}`
  posterElem.style.backgroundImage = `url("${imgURL}${imgSize}${poster}"`
  return posterElem
}

addTextContent(data)
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

  ratingElem.textContent = rating
  countElem.textContent = `(${count} votes)`

  // add subheading (runtime, release)
  let subHeader = mainElem.querySelector(".subheading")
  let releaseElem = subHeader.querySelector("#release")
  let runtimeElem = subHeader.querySelector("#runtime")

  releaseElem.textContent = `Release date: ${releaseDate}`
  runtimeElem.textContent = `Runtime: ${runTime} minutes`

  // populate with genres
  let genresElem = mainElem.querySelector("#genres")
  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)

  return { titleElem, overviewElem }
}