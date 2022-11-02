import { returnSpecificData } from "../helpers/combineData.js"

let result;

if (localStorage.reqData) {
  const database = JSON.parse(localStorage.reqData)
  const id = Number(database.id)
  const media = database.media

  result = Object.assign({}, await returnSpecificData(id, media))
}

export { result }