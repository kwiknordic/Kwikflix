let results;

if (localStorage.searchQuery) {
  let querySearchObject = JSON.parse(localStorage.searchQuery)
  results = querySearchObject.results
}

console.log(results)

export { results }