import { addRatingStars } from "../helpers/addRatingStars.js"
import { resolveTitleName } from "../helpers/resolveTitleName.js"

let container = document.querySelector("main")
let aside = document.querySelector("aside")

function render(result) {
  // TODO: Create a template of all this

  let entry = document.createElement("div")
  let media = result.media_type
  entry.dataset.id = result.id
  entry.dataset.media = media
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
  headingElem.dataset.linkForward = "true"

  let titleElem = document.createElement("span")
  let title = resolveTitleName(media)
  titleElem.textContent = result[title]
  titleElem.classList.add("title")

  let mediaElem = document.createElement("em")
  mediaElem.textContent = `(${result.media_type})`

  // sub-heading
  let subHeadingElem = document.createElement("div")
  subHeadingElem.classList.add("subheading")

  let releaseDateElem = document.createElement("span")
  releaseDateElem.textContent = `${result.releaseDate}`

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

export { render }