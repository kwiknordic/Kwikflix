import { renderSlider } from "./view.js"
import { getList } from "./model.js"


export function initSliderOne() {
  renderSlider("first", getList("movies", "trending"))
}

export function initSliderTwo() {
  renderSlider("second", getList("tv", "trending"))
}

export function renderDetails(id) {
  localStorage.setItem('detailReq', id);
  window.location.href = "./details.html";
}