import { API_KEY } from "./apiKey.js"

export const base = {
  url: "https://api.themoviedb.org/3",
  lang: "&language=en-US",
  page: "&page=",
  search: "&query=",
  adult: "&include_adult",
  API_KEY: "?api_key=" + API_KEY,
}