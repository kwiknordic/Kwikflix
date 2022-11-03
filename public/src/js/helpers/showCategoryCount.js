export function showCategoryCount(categoryCount) {
  let allFilters = Array.from(document.querySelector("ul").children)
  allFilters.forEach(filter => {
    let selector = filter.getAttribute("select")
    let countLabel = filter.firstElementChild
    let filterQty;

    if (selector === "all") filterQty = categoryCount.all || 0
    if (selector === "TBS") filterQty = categoryCount.TBS || 0
    if (selector === "archived") filterQty = categoryCount.archived || 0
    if (selector === "movie") filterQty = categoryCount.movie || 0
    if (selector === "tv") filterQty = categoryCount.tv || 0

    countLabel.textContent = filterQty
    countLabel.classList.remove("hidden")
    })
}