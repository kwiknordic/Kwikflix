import { searchLists, getImgProps } from "../api/getResponse.js"

export async function returnSpecificData(id, media) {
  let response;
  let data;
  let imgConf;

  if (media == "movie") response = await searchLists(id, "movies", "self")
  if (media == "tv") response = await searchLists(id, "tv", "self")
  const img = await getImgProps()

  data = combineData(response, media)
  imgConf = {
    imgSizes: img.imgSizes,
    imgURL: img.imgURL,
  }

  return Object.assign({}, data, imgConf)
}

export function combineData(obj, media) {
  let data;
  
  const general = {
    media,
    id: obj.id,
    overview: obj.overview,
    genres: obj.genres,
    rating: obj.vote_average,
    votes: obj.vote_count,
  
    backdrop: obj.backdrop_path,
    poster: obj.poster_path,
  }
  
  if (media == "movie") {
    const movieSpecific = {
      title: obj.original_title,
      releaseDate: obj.release_date,
      runTime: obj.runtime,
      imdbID: obj.imdb_id,
    }
  
    data = Object.assign({}, general, movieSpecific)
  }
  
  if (media == "tv") {
    const tvSpecific = {
      title: obj.original_name,
      releaseDate: obj.first_air_date,
      runTime: obj.last_episode_to_air.runtime
    }
  
    data = Object.assign({}, general, tvSpecific)
  }
  
  return data
}