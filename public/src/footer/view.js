let footerElem = document.querySelector("#footer")
let footerMenu = footerElem.querySelector(".footer-menu")

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

    footerMenu.append(container)
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

    let allDetails = footerMenu.querySelectorAll("details")
    allDetails.forEach( detail => detail.setAttribute("open", ""))
  }
}

export { addLinks, makeResponsive }