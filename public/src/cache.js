export function cache(func) {
  let cache = new Map()

  return async function() {
    let args = arguments
    let key = [func.name, ...args].join("-")

    if (cache.has(key)) {
      console.log("I found this in cache: " + key)
      return cache.get(key)
    }

    let response = await func(...args)
    cache.set(key, response)
    return response
  }
}