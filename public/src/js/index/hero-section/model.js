import { getLists, getImgProps } from "../../api/getResponse.js"

// Get highest trending result
let response = await getLists("movies", "trending")
let firstResult = response.results[0]

// Get image-meta data
let imgProps = await getImgProps()

export const topResult = {
  id: firstResult.id,
  title: firstResult.title,
  mediaType: firstResult.media_type,
  overview: firstResult.overview,
  backdrop: firstResult.backdrop_path,

  imgSizes: imgProps.imgSizes,
  imgURL: imgProps.imgURL,
}