import { renderSlider } from "./view.js"
import { getList } from "./model.js"

export function initSliderOne() {
  renderSlider("first", getList("movies", "trending"))
}

export function initSliderTwo() {
  renderSlider("second", getList("tv", "trending"))
}