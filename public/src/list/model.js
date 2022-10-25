import { returnSpecificData } from "../helpers/combineData.js"

let userList;

if (localStorage.userList) {
  userList = JSON.parse(localStorage.userList)

  userList = userList.map( entry => {
    let data = entry.data
    let { id, media, status } = data
    return getEntry(Number(id), media, status)
  })
}

async function getEntry(id, media, status) {
  if (!id || !media) return;
  return Object.assign({}, await returnSpecificData(id, media), { status })
}

export { userList }