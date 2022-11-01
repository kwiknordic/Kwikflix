import { searchLists } from "../api/getResponse.js"

export async function showTrailerModal(id, media) {
  let template = trailerTemplate()
  let content = template.content.firstElementChild
  let response;

  if (media === "movie") response = await searchLists(id, "movies", "videos")
  if (media === "tv") response = await searchLists(id, "tv", "videos")
  let videoPlayer = content.lastElementChild
  videoPlayer.src = getTrailer(response.results)

  let modal = template.content.cloneNode(true)
  document.body.classList.toggle("overflow-hidden")
  document.body.prepend(modal)
}

function getTrailer(videos) {
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
  return youtubeURL + video[randomPick]
}

function trailerTemplate() {
  let template = document.createElement("template")
  let content = document.createElement("div")
  content.classList.add("modalView")

  content.insertAdjacentHTML("afterbegin", `
    <i class="fa fa-close close"></i>
    <iframe class="embedded-video" muted playsinline src=""></iframe>
  `)

  template.content.append(content)
  return template
}