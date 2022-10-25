import { returnSpecificData } from "../helpers/combineData.js"

let database;
let result;

if (localStorage.reqData) {
  database = JSON.parse(localStorage.reqData)
  let id = Number(database.id)
  let media = database.media

  result = Object.assign({}, await returnSpecificData(id, media))
}

export { result }