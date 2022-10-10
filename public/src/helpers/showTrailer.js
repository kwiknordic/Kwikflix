export function showTrailerModal(url) {
  let template = document.querySelector("#template-modal-trailerView")

  let videoPlayer = template.content.firstElementChild.lastElementChild
  videoPlayer.data = url

  let modal = template.content.cloneNode(true)
  document.body.prepend(modal)

  // Ability to close the modal
  modal = document.querySelector("#modal-trailerView")

  let closeBtn = modal.querySelector(".close-modal")
  closeBtn.addEventListener("click", e => {
    e.target.closest("div").remove()
  })
  
}