import { getLists, getImgProps } from "../../api/getResponse.js"

// Get image-meta data
let imgProps = await getImgProps()

// Get highest trending results
export async function getList(endpoint, node, page) {
  let response = await getLists(endpoint, node, page)
  return [response.results, imgProps]
}