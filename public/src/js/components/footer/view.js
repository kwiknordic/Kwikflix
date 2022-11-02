let footer = document.querySelector("footer")

function addLinks(menu) {
  let footerLinks = footer.querySelector(".footer-menu")

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

  function openFooterMenus() {
    if (document.body.clientWidth < 768) return;
    let allDetails = footer.querySelectorAll("details")
    allDetails.forEach( detail => detail.setAttribute("open", ""))
  }

  // check initially + everytime browser is resized
  openFooterMenus()
  window.addEventListener("resize", openFooterMenus)
}

function copyRightPlaceholder() {
  let container = document.createElement("span")
  container.id = "footer-copyright"
  container.textContent = "This product uses the TMDB API but is not endorsed or certified by TMDB."
  footer.append(container)
}

export { 
  addLinks, 
  makeResponsive, 
  copyRightPlaceholder 
}