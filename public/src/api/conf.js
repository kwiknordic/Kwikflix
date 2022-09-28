import { API_KEY } from "./apiKey.js"

export { conf }

// ?api_key=${API_KEY}

const conf = {
  url: "https://api.themoviedb.org/3",
  imgURL: "https://image.tmdb.org",
  langQuery: "&language=en-US",
  pageQuery: "&page=",
}

// Request trailer
async function requestVideo(type, reqId) {
  let response = await fetch(`${conf.url}/${type}/${reqId}${endpoints.videos}${conf.API_KEY}`)

  if (!response.ok) throw new Error("Error") 
  return response.json()
}

const youtubeURL =  "https://www.youtube.com/watch?v="

const imageConf = async function() {
  let response = await fetch(
    conf.url + endpoints.conf + conf.API_KEY)

  if (!response.ok) throw new Error("Error") 

  return response.json()
}

//  HiQimgURL: "https://image.tmdb.org/t/p/original"
//  LoQimgURL: "https://image.tmdb.org/t/p/w780"