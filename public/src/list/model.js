import { searchLists, getImgProps } from "../api/getResponse.js"

let userList = JSON.parse(localStorage.userList)

userList = userList.map( entry => {
  return getEntry(entry.id, entry.media)
})

async function getEntry(id, media) {

  let imgProps = await getImgProps()

  let response;
  let videoResponse;
  let data;

  if (media == "movie") {
    response = await searchLists(id, "movies", "self")
    videoResponse = await searchLists(id, "movies", "videos")
  }
  else {
    response = await searchLists(id, "tv", "self")
    videoResponse = await searchLists(id, "tv", "videos")
  }

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

    videos: videoResponse.results
  }

  if (media == "movie") {
    let movieSpecificProps = {
      title: response.original_title,
      releaseDate: response.release_date,
      runTime: response.runtime,
      imdbID: response.imdb_id,
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

  return data
}

export { userList }