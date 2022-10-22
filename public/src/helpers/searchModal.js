export function showTemplate() {
  let template = searchTemplate()
  let modal = template.content.cloneNode(true)
  document.body.prepend(modal)
}

function searchTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("div")
  content.classList.add("modalView")

  content.insertAdjacentHTML("afterbegin", `
    <i class="fa fa-close close"></i>
    <input type="text" class="input">
    <button id="submitSearch">Search</button>
  `)

  template.content.append(content)
  return template
}