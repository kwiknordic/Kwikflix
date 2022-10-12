import * as config from "./conf.js"
import * as endpoints from "./endpoints.js"
import { cache } from "../cache.js"

let { API_KEY, url } = config.base
let { pageQuery: page, langQuery: lang } = config.base

// insert "self" as detail to search for unique IDs
async function searchLists(id, node, detail) {
  if (!id || !node) throw Error("Node or endpoint is not correct")
  if (typeof id != "number") return;

  let root = endpoints[node].rootDir
  let endpoint = endpoints["extra"][detail]
  let response;

  if (detail == "self") {

    response = await fetch(url + 
                           root + 
                           "/" +
                           id +
                           API_KEY + 
                           lang)
  } else {

    response = await fetch(url + 
                           root + 
                           "/" + id +
                           endpoint +
                           API_KEY + 
                           lang)
  }

  if (!response.ok) throw Error("Response is not ok")
  return response.json()
}

async function getLists(endpoint, node, currentPage = 1, callback) {
  if (!endpoint || !node) throw Error("Node or endpoint is not correct")

  let root = endpoints[node].rootDir
  endpoint = endpoints[node][endpoint]
  page += currentPage
  let response;

  if (node == "configuration") {
    response = await fetch(url + endpoint + API_KEY)
  }

  if (node == "movies") {
    response = await fetch(url + 
                           root + 
                           endpoint + 
                           API_KEY + 
                           lang + 
                           page)
  }

  if (node == "trending") {
    let timeWindow = "/day"
    response = await fetch(url + 
                           root + 
                           endpoint + 
                           timeWindow + 
                           API_KEY)
  }

  if (!response.ok) throw Error("Response is not ok")
  return response.json()

}

async function getImgProps() {
  let response = await getLists("main", "configuration")
  let imgURL = response.images.base_url
  let imgSizes = response.images.backdrop_sizes

  return {
  imgURL,
  imgSizes
  }
}

// wrap responses in cache
getLists = cache(getLists)
searchLists = cache(searchLists)
getImgProps = cache(getImgProps)

export { getLists, searchLists, getImgProps }