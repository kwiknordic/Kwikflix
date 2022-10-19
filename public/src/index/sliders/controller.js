import { renderSlider } from "./view.js"
import { getList } from "./model.js"


export function initSliderOne() {
  renderSlider("first", getList("movies", "trending"))
}

export function initSliderTwo() {
  renderSlider("second", getList("tv", "trending"))
}

export function renderDetails(id, media) {
  //localStorage.setItem('detailReq', id);

  let reqData = {
    id,
    media,
  }

  localStorage.setItem('reqData', JSON.stringify(reqData))

  window.location.href = "./details.html";
}