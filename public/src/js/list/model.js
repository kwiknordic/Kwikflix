import { returnSpecificData } from "../helpers/combineData.js"

function getRawUserList() {
  if (!localStorage.userList) return
  return JSON.parse(localStorage.userList)
}

function setRawUserList(userList) {
  localStorage.setItem('userList', JSON.stringify(userList))
}

function getUserList() {
  let userList = getRawUserList()
  userList = userList.map( entry => {
    let data = entry.data
    let { id, media, status } = data
    return getEntry(Number(id), media, status)
  })
  
  async function getEntry(id, media, status) {
    if (!id || !media) return;
    return Object.assign({}, await returnSpecificData(id, media), { status })
  }

  return userList
}

export {
  getRawUserList,
  setRawUserList,
  getUserList,
}