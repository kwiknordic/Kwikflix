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
    newSlide.id = entry.id
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

    slider.append(newSlide)
    newSlide.append(title)
  })
}