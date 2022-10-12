import { searchLists, getImgProps } from "../api/getResponse.js"

let id = Number(localStorage.getItem("detailReq"))

let response = await searchLists(id, "movies", "self")
let imgProps = await getImgProps()

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