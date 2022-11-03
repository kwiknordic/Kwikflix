export function searchEntryTemplate() {
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
  </div>
  `)

  template.content.append(content)
  return template
}