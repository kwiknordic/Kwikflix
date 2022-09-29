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
    if (index == 0 && entry.media_type == "movie") return;

    let newSlide = document.createElement("div")
    newSlide.style.backgroundImage = `url("${imgURL}${imgSize}${entry.backdrop_path}"`

    let title = document.createElement("h4")
    let originalTitle;
    if (entry.media_type == "movie") originalTitle = "original_title"
    if (entry.media_type == "tv") originalTitle = "original_name"

    // shorten tv titles if above 20 chars
    entry[originalTitle].length <= 25 ?
    title.textContent = entry[originalTitle] :
    title.textContent = entry[originalTitle].slice(0,25) + "..."
    // TODO: css has ways of creating ... itself

    slider.append(newSlide)
    newSlide.append(title)
  })
}