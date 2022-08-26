// Selector
let textArea = document.querySelector(".grid-container")

// API
const url = "https://api.themoviedb.org/3"
const apiKey = "?api_key=6fa8c2a16615601f1fbf1478af73b1df"
let langQuery = "&language=en-US"
let pageQuery = "&page="

let endpoint = { 
  conf: "configuration",
  topRated: "/movie/top_rated",
}

async function getResponse(pages) {
  const currPage = pageQuery + pages

  const response = await fetch(String(url + endpoint.topRated + apiKey + langQuery + currPage))
  if (!response.ok) throw Error("Request denied!")
  const jsonResponse = await response.json()
  return jsonResponse
}

async function render(getResponse) {
  const response = await getResponse
  results = response.results

  exclLanguages = ["hi", "ja"]

  results.forEach(result => {
    if (exclLanguages.includes(result.original_language)) return;

    gridChild = document.createElement("div")
    gridChild.className = "box"
    gridChild.id = result.id
    gridChild.innerHTML = `
      <span class="langAndYear"> Language: ${result.original_language.toUpperCase()} | Release: ${result.release_date.slice(0,4)}</span>
      <h2>${result.title}</h2>
      Poster: ${result.poster_path}
      `

    textArea.append(gridChild)
  })
}

function amountOfPages(to) {
  let start = 1
  while (start <= to) {
    render(getResponse(start))
    start++
  }
}

amountOfPages(1)