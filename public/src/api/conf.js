import { API_KEY } from "./apiKey.js"

export const base = {
  url: "https://api.themoviedb.org/3",
  langQuery: "&language=en-US",
  pageQuery: "&page=",
  API_KEY: "?api_key=" + API_KEY,
}