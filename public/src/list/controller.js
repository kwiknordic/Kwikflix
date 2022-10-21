import { userList } from "./model.js"
import * as view from "./view.js"
import * as footer from "../footer/controller.js"
import { eventDelegation } from "../helpers/eventListeners.js"

function init() {
  if (!userList) return;
  Promise.all(userList).then( results => {
    results.forEach( entry => view.render(entry) )
  })
}

init()

eventDelegation()
footer.init()