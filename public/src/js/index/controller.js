import { renderHeroSection } from "./hero-section/view.js"
import { renderSlider } from "./sliders/view.js"
import { topResult } from "./hero-section/model.js"
import { getList } from "./sliders/model.js"
import { renderFooter } from "../components/footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"

renderHeroSection(topResult)
renderSlider("movie-slider", getList("movies", "trending"))
renderSlider("tv-slider", getList("tv", "trending"))
renderSlider("top-rated-slider", getList("topRated", "movies"))

renderFooter()
eventDelegation()