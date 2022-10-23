let results;

if (localStorage.searchQuery) {
  let querySearchObject = JSON.parse(localStorage.searchQuery)
  results = querySearchObject.results
}

export { results }