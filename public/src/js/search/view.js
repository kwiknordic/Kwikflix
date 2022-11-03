import { searchEntryTemplate } from "../components/searchEntryTemplate.js"
import { addRatingStars } from "../helpers/addRatingStars.js"
const main = document.body.querySelector("main")

export function renderEntryElements({ id, media }) {
  let template = searchEntryTemplate()
  let content = template.content.firstElementChild
  content.dataset.id = id
  content.dataset.media = media

  let entry = template.content.cloneNode(true)
  main.append(entry)
}

export function populateEntryContent({ id, title, rating, releaseDate, media }) {
  let target = document.body.querySelector(`[data-id="${id}"]`)

  // Elements to be modified
  let titleElem = target.querySelector(".title")
  let mediaElem = target.querySelector(".media")
  let releasedElem = target.querySelector(".release")
  let ratingElem = target.querySelector(".rating")

  // Content to be added
  titleElem.textContent = title
  mediaElem.textContent = `(${media})`
  releasedElem.textContent = `${releaseDate.slice(0,4)}`
  ratingElem.innerHTML = addRatingStars(rating)
}

export function noRenderMessage() {
  let notice = document.createElement("p")
  notice = "There are no results to show. Please enter a search input."
  main.append(notice)
}