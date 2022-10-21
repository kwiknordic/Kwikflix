import { renderDetails } from "../../helpers/renderDetails.js"

let container = document.querySelectorAll(".trending-now-container")

export async function renderSlider(sliderNum, data) {
  sliderNum == "first" ? sliderNum = 0 :
  sliderNum == "second" ? sliderNum = 1 :
  sliderNum = undefined

  if (sliderNum == undefined) throw Error("SliderNum is not correct")

  // destructure input of data
  data = await data
  let list = data[0]
  let imgProps = data[1]

  let imgSize = imgProps.imgSizes.at(-2)
  let imgURL = imgProps.imgURL

  // select sliderElement
  let slider = container[sliderNum].querySelector(".slider")

  list.forEach( (entry, index) => {
    // jump over first movie-result; is shown in hero-section
    if (index == 0 && entry.media_type == "movie") return;
    if (!entry.backdrop_path) return;

    let newSlide = document.createElement("div")
    newSlide.dataset.id = entry.id
    newSlide.dataset.media = entry.media_type
    newSlide.dataset.linkForward = true

    newSlide.style.backgroundImage = `url("${imgURL}${imgSize}${entry.backdrop_path}"`

    // add title
    let title = document.createElement("h4")
    let originalTitle;

    entry.media_type == "movie" ? 
      originalTitle = "original_title" :
    entry.media_type == "tv" ?
      originalTitle = "original_name" :
      "original_title"
    
    title.textContent = entry[originalTitle]

    newSlide.append(title)
    slider.append(newSlide)
  })
}