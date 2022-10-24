import { resolveTitleName } from "../../helpers/resolveTitleName.js"

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
    let media = entry.media_type
    newSlide.dataset.id = entry.id
    newSlide.dataset.media = media
    newSlide.dataset.linkForward = true

    newSlide.style.backgroundImage = `url("${imgURL}${imgSize}${entry.backdrop_path}"`

    // add title
    let titleElem = document.createElement("h4")
    let title = resolveTitleName(media)
    
    titleElem.textContent = entry[title]

    newSlide.append(titleElem)
    slider.append(newSlide)
  })
}