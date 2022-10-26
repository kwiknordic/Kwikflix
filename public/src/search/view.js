import { addRatingStars } from "../helpers/addRatingStars.js"

export function renderEntryElements({ id, media, status }) {
  let target = document.body.querySelector("main")
  let template = entryTemplate()
  let content = template.content.firstElementChild
  content.dataset.id = id
  content.dataset.media = media
  content.dataset.status = status

  let entry = template.content.cloneNode(true)
  target.append(entry)
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

/*   genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres) */
}

function entryTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("div")
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
  </div>
  `)

  template.content.append(content)
  return template
}