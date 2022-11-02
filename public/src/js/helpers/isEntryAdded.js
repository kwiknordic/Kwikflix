export function isEntryAdded(id) {
  if (!localStorage.getItem("userList")) return;
  let database = JSON.parse(localStorage.userList)
  return database.some( entry => entry.id === id)
}