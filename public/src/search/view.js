import { addRatingStars } from "../helpers/addRatingStars.js"

let container = document.querySelector("main")
let aside = document.querySelector("aside")

function render({ id, title, rating, releaseDate, genres, media_type }) {

  // TODO: Create a template of all this

  //console.log(id, title)

  let entry = document.createElement("div")
  entry.dataset.id = id
  entry.dataset.media = media_type
  entry.classList.add("entry")

  let details = document.createElement("div")
  details.id = "details"

  let sectionTwo = document.createElement("div")
  let whatever = document.createElement("span")
  whatever.textContent = "lalalala"

  let sectionThree = document.createElement("div")

  // heading
  let headingElem = document.createElement("div")
  headingElem.classList.add("heading")

  let titleElem = document.createElement("span")
  headingElem.dataset.linkForward = "true"
  titleElem.classList.add("title")
  titleElem.textContent = title

  let mediaElem = document.createElement("em")
  mediaElem.textContent = `(${media_type})`

  // sub-heading
  let subHeadingElem = document.createElement("div")
  subHeadingElem.classList.add("subheading")

  let releaseDateElem = document.createElement("span")
  releaseDateElem.textContent = `${releaseDate}`

  let ratingElem = document.createElement("span")
  //ratingElem.innerHTML = addRatingStars(rating)

/*   let genresElem = document.createElement("span")
  genres = genres.map(genre => genre.name)
  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
  genresElem.textContent += formatter.format(genres) */

  let divider = document.createElement("span")
  divider.classList.add("divider")
  divider.textContent = "|"

  container.append(entry)
  entry.append(details)
  entry.append(sectionTwo)
  entry.append(sectionThree)
  details.append(headingElem)
  details.append(subHeadingElem)
  //details.append(genresElem)
  sectionTwo.append(whatever)
  headingElem.append(titleElem)
  headingElem.append(mediaElem)
  subHeadingElem.append(releaseDateElem)
  subHeadingElem.append(divider.cloneNode(true))
  subHeadingElem.append(ratingElem)
}

function filter(attribute) {
  let entries = document.querySelectorAll(".entry")
  entries.forEach(entry => {
    // reset all entries before filtering
    entry.classList.remove("hidden")

    console.log(entry, attribute)
    
    if (!attribute) return;
    if (attribute !== entry.getAttribute("data-media")) entry.classList.add("hidden")
  })
}

export { render, filter }