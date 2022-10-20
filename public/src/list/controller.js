import { userList } from "./model.js"
import * as view from "./view.js"
import * as footer from "../footer/controller.js"

function init() {
  Promise.all(userList).then( results => {
    results.forEach( entry => view.render(entry))
  })
}

init()
footer.init()