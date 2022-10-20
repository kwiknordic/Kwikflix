let footer = document.querySelector("#footer")
let footerMain = footer.querySelector(".main")
let footerLinks = footerMain.querySelector(".footer-menu")

function addLinks(menu) {
  for (let parent in menu) {
    let container = document.createElement("details")
    let title = document.createElement("summary")
    let list = document.createElement("ul")

    title.textContent = parent

    for (let child in menu[parent]) {
      let row = document.createElement("li")
      let link = document.createElement("a")
      link.textContent = child
      link.href = menu[parent][child]

      row.append(link)
      list.append(row)
    }

    footerLinks.append(container)
    container.append(title)
    container.append(list)

  }
}

function makeResponsive() {

  // check initially
  openDetails()

  // check again everytime browser is resized
  window.addEventListener("resize", openDetails)

  function openDetails() {
    let width = document.body.clientWidth

    // only have menu opened for bigger screens
    if (width < 768) return;

    let allDetails = footerMain.querySelectorAll("details")
    allDetails.forEach( detail => detail.setAttribute("open", ""))
  }
}

function copyRightPlaceholder() {
  let container = document.createElement("span")
  container.id = "footer-copyright"
  container.textContent = "This product uses the TMDB API but is not endorsed or certified by TMDB."
  footer.append(container)
}

export { addLinks, makeResponsive, copyRightPlaceholder }