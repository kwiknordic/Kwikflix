import { getLists, searchLists, getImgProps } from "../api/getResponse.js"
//import * as helper from "../helper.js"

// Get highest trending result
let response = await getLists("movies", "trending")
let firstResult = response.results[0]

// Get image-meta data
let imgProps = await getImgProps()

// Get trailer of result above
let videoResponse = await searchLists(firstResult.id, "movies", "videos")

export const data = {
  id: firstResult.id,
  title: firstResult.title,
  overview: firstResult.overview,
  backdrop: firstResult.backdrop_path,

  imgSizes: imgProps.imgSizes,
  imgURL: imgProps.imgURL,

  videos: videoResponse.results
}