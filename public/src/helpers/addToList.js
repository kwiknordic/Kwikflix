export function saveEntry(id, media, status) {
  let userList;
  let newEntry = {
    id,
    data: { id, media, status }
  }

  // On first use
  if (!localStorage.getItem("userList")) {
    userList = [newEntry]
    localStorage.setItem('userList', JSON.stringify(userList))
    return
  }

  // After first use
  let database = JSON.parse(localStorage.userList)
  const uniqueEntries = database.filter( entry => {
  if (entry.id !== newEntry.id) return entry
  })

  userList = [
    ...uniqueEntries,
    newEntry,
  ]

  localStorage.setItem('userList', JSON.stringify(userList))
}

export function checkListStatus(id) {
  if (!localStorage.getItem("userList")) return;
  let database = JSON.parse(localStorage.userList)
  let button = document.querySelector("#add-to-list")
  if (database.some( entry => entry.id === id)) {
    button.disabled = "true"
  }
}