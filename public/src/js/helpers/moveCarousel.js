export function moveCarousel(e) {
  const slider = e.target.parentElement.parentElement.lastElementChild
  let cards = Array.from(slider.children)

  if (e.target.classList.contains("fa-chevron-left")) {

    let latestHiddenCard = cards.findLast(card => card.classList.contains("hidden"))
    if (latestHiddenCard) latestHiddenCard.classList.remove("hidden")
  }

  if (e.target.classList.contains("fa-chevron-right")) {
    let filter = cards.filter(card => !card.classList.contains("hidden"))
    if (filter.length <= 4) return

    let firstVisibleCard = cards.find(card => !card.classList.contains("hidden"))
    if (firstVisibleCard) firstVisibleCard.classList.add("hidden")
  }
}