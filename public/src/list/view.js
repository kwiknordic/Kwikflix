import { addRatingStars } from "../helpers/addRatingStars.js"
let main = document.body.querySelector("main")

export function toggleActionBtn(id, status) {
  const parent = document.querySelector(`[data-id="${id}"]`)
  const archiveButton = parent.querySelector(".archive-button")
  const unsetButton = parent.querySelector(".unset-button")

  if (status === "trash") {
    parent.style.display = "none"
    return;
  }

  if (status === "archived") {
    archiveButton.classList.add("hidden")
    unsetButton.classList.remove("hidden")
  }

  if (status === "TBS") {
    unsetButton.classList.add("hidden")
    archiveButton.classList.remove("hidden")
  }
}

export function renderEntryElements({ id, media, status }) {
  let main = document.body.querySelector("main")
  let template = entryTemplate()
  let content = template.content.firstElementChild
  content.dataset.id = id
  content.dataset.media = media
  content.dataset.status = status

  let entry = template.content.cloneNode(true)
  main.append(entry)
}

export function populateEntryContent({ id, title, rating, releaseDate, genres, media }) {
  let target = document.body.querySelector(`[data-id="${id}"]`)

  let titleElem = target.querySelector(".title")
  let mediaElem = target.querySelector(".media")
  let releasedElem = target.querySelector(".release")
  let ratingElem = target.querySelector(".rating")
  let genresElem = target.querySelector(".genres")

  titleElem.textContent = title
  mediaElem.textContent = `(${media})`
  releasedElem.textContent = `${releaseDate.slice(0,4)}`
  ratingElem.innerHTML = addRatingStars(rating)

  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres)
}

export function noRenderMessage() {
  let notice = document.createElement("p")
  notice = "There are no saved entries. Please add something to the list."
  main.append(notice)
}

function entryTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("article")
  content.classList.add("entry")

  content.insertAdjacentHTML("afterbegin", `
  <div class="details">
    <div class="heading">
      <span class="title"></span>
      <em class="media"></em>
    </div>
    <div class="subheading">
      <span class="release"></span>
      <span>|</span>
      <span class="rating"></span>
    </div>
    <span class="genres"></span>
  </div>
  <div class="actions">
    <i class="fa-xl fa-solid fa-file-lines" data-link-forward="true"></i>
    <i class="archive-button fa-xl fa-solid fa-box-archive"></i>
    <i class="unset-button fa-xl fa-solid fa-rotate-left"></i>
    <i class="trash-button fa-xl fa-solid fa-trash-can"></i>
  </div>
  `)

  template.content.append(content)
  return template
}