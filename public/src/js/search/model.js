let response;

if (localStorage.searchQuery) {
  let querySearchObject = JSON.parse(localStorage.searchQuery)
  response = querySearchObject.results
}

export { response }