import { addRatingStars } from "../helpers/addRatingStars.js"

let container = document.querySelector("main")

function render({ id, title, rating, releaseDate, genres, mediaType }) {

  // TODO: Create a template of all this

  let entry = document.createElement("div")
  entry.dataset.id = id
  entry.dataset.media = mediaType
  entry.classList.add("item")

  // heading
  let headingElem = document.createElement("div")
  headingElem.classList.add("heading")

  let titleElem = document.createElement("span")
  headingElem.dataset.linkForward = "true"
  titleElem.classList.add("title")
  titleElem.textContent = title

  let mediaElem = document.createElement("em")
  mediaElem.textContent = `(${mediaType})`

  // sub-heading
  let subHeadingElem = document.createElement("div")
  subHeadingElem.classList.add("subheading")

  let releaseDateElem = document.createElement("span")
  releaseDateElem.textContent = `${releaseDate}`

  let ratingElem = document.createElement("span")
  ratingElem.innerHTML = addRatingStars(rating)

  let genresElem = document.createElement("span")
  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)

  let hr = document.createElement("hr")

  let divider = document.createElement("span")
  divider.classList.add("divider")
  divider.textContent = "|"

  container.append(entry)
  entry.append(headingElem)
  entry.append(subHeadingElem)
  entry.append(genresElem)
  headingElem.append(titleElem)
  headingElem.append(mediaElem)
  subHeadingElem.append(releaseDateElem)
  subHeadingElem.append(divider.cloneNode(true))
  subHeadingElem.append(ratingElem)

  entry.after(hr)
  
}

export { render }