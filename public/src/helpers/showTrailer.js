export function getTrailer(container, videos) {
  let youtubeURL = "https://www.youtube-nocookie.com/embed/"

  let video = videos
    .filter(video => {

      if (video.site != "YouTube") return;
      if (video.iso_639_1 != "en") return;
      if (video.type != "Trailer") return;
      return video
    })
    .map(video => video.key)

  let randomPick = Math.floor(Math.random() * video.length)

  let button = container.querySelector("#watch-trailer")
  button.addEventListener("click", () => {
    showTrailerModal(youtubeURL + video[randomPick])
  })

  return button
}

function showTrailerModal(url) {
  let template = trailerTemplate()
  let content = template.content.firstElementChild

  let videoPlayer = content.lastElementChild
  videoPlayer.data = url

  let modal = template.content.cloneNode(true)
  document.body.prepend(modal)

  // Ability to close the modal
  modal = document.querySelector("#modal-trailerView")

  modal.addEventListener("click", e => {
    if (e.target.classList.contains("embedded-video")) return;
    e.target.closest("div").remove()
  })
  
}

function trailerTemplate() {

  let template = document.createElement("template")
  let content = document.createElement("div")
  content.id = "modal-trailerView"

  content.insertAdjacentHTML("afterbegin", `
    <button class="close-modal">Close</button>
    <object class="embedded-video" type="video/mp4" data=""></object>
  `)

  template.content.append(content)
  return template
}