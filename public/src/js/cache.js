export function cache(func) {

  const storage = localStorage.getItem("cachedResults");
  let cache;

  storage ? cache = JSON.parse(storage, reviver) :
  cache = new Map()

  return async function() {
    let args = arguments
    let key = [func.name, ...args].join("")
    if (cache.has(key)) return cache.get(key)

    let response = await func(...args)
    cache.set(key, response)
    localStorage.setItem("cachedResults", JSON.stringify(cache, replacer))
    return response
  }
}

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: [...value],
    };
  } else {
    return value;
  }
}

function reviver(key, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}