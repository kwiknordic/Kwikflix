import * as header from "./hero-section/controller.js"
import * as slider from "./sliders/controller.js"
import * as footer from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"

header.init()
slider.initSliderOne()
slider.initSliderTwo()
footer.init()
eventDelegation()