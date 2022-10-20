export function addRatingStars(ratingValue) {
  let value = Math.round(ratingValue / 2)
  let star = "&#9733;"
  let placeholder = "&#9734;"

  let starRating = new Array(value).fill(star)

  while (starRating.length < 5) {
    starRating.push(placeholder)
  } 

  return starRating.join("")
}