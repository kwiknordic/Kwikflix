import { returnSpecificData } from "../helpers/combineData.js"

const unmodifiedUserList = {
  get: function() {
    if (!localStorage.userList) return
    return JSON.parse(localStorage.userList)
  },
  
  set: function(userList) {
    localStorage.setItem('userList', JSON.stringify(userList))
  }
}

function mappedUserList() {
  let userList = unmodifiedUserList.get()
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
  unmodifiedUserList,
  mappedUserList,
}