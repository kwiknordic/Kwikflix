import { searchLists, getImgProps } from "../api/getResponse.js"

let reqData = JSON.parse(localStorage.reqData)
let id = Number(reqData.id)
let media = reqData.media

let response;
if (media == "movie") response = await searchLists(id, "movies", "self")
else response = await searchLists(id, "tv", "self")

let imgProps = await getImgProps()

// TODO: data below is not valid for series (check: release, runtime)
export const data = {
  id: response.id,
  title: response.title,
  overview: response.overview,
  genres: response.genres,
  releaseDate: response.release_date,
  runTime: response.runtime,
  imdbID: response.imdb_id,
  rating: response.vote_average,
  count: response.vote_count,

  backdrop: response.backdrop_path,
  poster: response.poster_path,

  imgSizes: imgProps.imgSizes,
  imgURL: imgProps.imgURL,
}