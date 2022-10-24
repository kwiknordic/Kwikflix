import { searchLists, getImgProps } from "../api/getResponse.js"

let imgProps = await getImgProps()
let database = JSON.parse(localStorage.reqData)
let id = Number(database.id)
let media = database.media
let response;
let data;

if (media == "movie") response = await searchLists(id, "movies", "self")
if (media == "tv") response = await searchLists(id, "tv", "self")

data = {
  mediaType: media,

  id: response.id,
  overview: response.overview,
  genres: response.genres,
  rating: response.vote_average,
  count: response.vote_count,

  backdrop: response.backdrop_path,
  poster: response.poster_path,

  imgSizes: imgProps.imgSizes,
  imgURL: imgProps.imgURL,
}

if (media == "movie") {
  let movieSpecific = {
    title: response.original_title,
    releaseDate: response.release_date,
    runTime: response.runtime,
    imdbID: response.imdb_id,
  }

  data = Object.assign({}, movieSpecific, data)
}

if (media == "tv") {
  let tvSpecific = {
    title: response.original_name,
    releaseDate: response.first_air_date,
    runTime: response.last_episode_to_air.runtime
  }

  data = Object.assign({}, tvSpecific, data)
}

export { data }