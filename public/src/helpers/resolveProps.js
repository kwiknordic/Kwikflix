export function resolveTitle(media) {
  let title;

  if (media == "movie") title = "original_title"
  if (media == "tv") title = "original_name"
  if (media == "person") title = "name"

  return title
}

export function hasProp(obj) {
  let releaseDate;

  if (obj.release_date) releaseDate = "release_date"
  if (obj.first_air_date) releaseDate = "first_air_date"
  return releaseDate
}

export function resolveRelease(obj, element) {
  function hasDate(obj) {
    let date;
    if (obj.release_date) date = "release_date"
    if (obj.first_air_date) date = "first_air_date"
    return date
  }

  let date = hasDate(obj)
  if (!date) {
    element.textContent = "N/A"
    return;
  }
  element.textContent = obj[date].slice(0,4)
}