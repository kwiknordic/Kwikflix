import { renderHeroSection } from "./hero-section/view.js"
import { renderSlider } from "./sliders/view.js"
import { topResult } from "./hero-section/model.js"
import { getList } from "./sliders/model.js"
import { renderFooter } from "../components/footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"

renderHeroSection(topResult)
renderSlider("first", getList("movies", "trending"))
renderSlider("second", getList("tv", "trending"))

renderFooter()
eventDelegation()