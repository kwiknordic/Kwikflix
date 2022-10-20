export function saveEntry(id, media) {

  let newEntry = { id, media }
  let userList = []

  // On first use
  if (!localStorage.getItem("userList")) {
    userList.push(newEntry)
    localStorage.setItem('userList', JSON.stringify(userList))
    return
  }

  // After first use
  userList = JSON.parse(localStorage.userList)
  if (userList.some( entry => entry.id == id )) return;

  userList = [
    ...userList,
    newEntry,
  ]

  localStorage.setItem('userList', JSON.stringify(userList))
}