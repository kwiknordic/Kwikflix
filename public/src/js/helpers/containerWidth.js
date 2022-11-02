export function containerWidth(element) {
  let width = element.clientWidth
  let response = "original"

  if (width < 1280) response = "w1280"
  if (width < 780) response = "w780"
  if (width < 300) response = "w300"

  return response
}