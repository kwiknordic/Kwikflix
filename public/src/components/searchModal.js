import { searchKeywords } from "../api/getResponse.js"
import { storeSearch } from "../search/controller.js"

export function showTemplate() {
  let template = searchTemplate()
  let modal = template.content.cloneNode(true)
  document.body.classList.toggle("overflow-hidden")
  document.body.prepend(modal)
}

export function submitSearch(element) {
  let container = element.closest("div")
  let input = container.querySelector("input")
  let query = input.value

  searchKeywords(query)
    .then( results => {
      console.log(results)
      storeSearch(results)
    })
}

function searchTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("div")
  content.classList.add("modalView")
  content.classList.add("searchModal")

  content.insertAdjacentHTML("afterbegin", `
    <i class="fa fa-close close"></i>
    <input type="text" class="input">
    <button id="submitSearch">Search</button>
  `)

  template.content.append(content)
  return template
}