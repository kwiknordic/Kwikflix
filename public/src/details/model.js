import { searchLists, getImgProps } from "../api/getResponse.js"

let reqData = JSON.parse(localStorage.reqData)
let id = Number(reqData.id)
let media = reqData.media

let imgProps = await getImgProps()

let response;
let data;

if (media == "movie") response = await searchLists(id, "movies", "self")
else response = await searchLists(id, "tv", "self")

data = {
  id: response.id,
  overview: response.overview,
  genres: response.genres,
  imdbID: response.imdb_id,
  rating: response.vote_average,
  count: response.vote_count,

  backdrop: response.backdrop_path,
  poster: response.poster_path,

  imgSizes: imgProps.imgSizes,
  imgURL: imgProps.imgURL,
}

if (media == "movie") {
  let movieSpecificProps = {
    title: response.original_title,
    releaseDate: response.release_date,
    runTime: response.runtime,
  }

  data = Object.assign({}, movieSpecificProps, data)
}

if (media == "tv") {
  let tvSpecificProps = {
    title: response.original_name,
    releaseDate: response.first_air_date,
    runTime: response.last_episode_to_air.runtime
  }

  data = Object.assign({}, tvSpecificProps, data)
}

export { data }