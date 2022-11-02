export async function renderSlider(sliderType, request) {
  const slider = document.body.querySelector(`.${sliderType}`)
  const [response, imgProps] = await request
  const imgURL = imgProps.imgURL
  const imgSize = imgProps.imgSizes.at(2)

  response.forEach((entry, index) => {
    // jump over first movie-result; is shown in hero-section
    if (index == 0 && entry.media_type == "movie") return;
    // jump over results that do not have any pictures
    if (!entry.backdrop_path) return;
    // do not create more slides than below
    if (index >= 8) return;

    let newSlide = document.createElement("div")
    let titleElem = document.createElement("h4")
    let media = entry.media_type

    newSlide.dataset.id = entry.id
    newSlide.dataset.media = media
    newSlide.dataset.linkForward = true
    newSlide.style.backgroundImage = `url("${imgURL}${imgSize}${entry.backdrop_path}"`
    titleElem.textContent = entry.original_title || entry.original_name
    
    newSlide.append(titleElem)
    slider.append(newSlide)
  })
}