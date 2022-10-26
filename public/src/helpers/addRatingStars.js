export function addRatingStars(ratingValue) {
  let stars;
  ratingValue > 8.3 ? stars = 5 :
  ratingValue > 6.7 ? stars = 4 :
  ratingValue > 5.8 ? stars = 3 :
  ratingValue > 4 ? stars = 2 :
  ratingValue > 0 ? stars = 1 :
  stars = 0

  const starIcon = "&#9733;"
  const placeholderIcon = "&#9734;"
  const starRating = new Array(stars).fill(starIcon)

  while (starRating.length < 5) {
    starRating.push(placeholderIcon)
  } 

  return starRating.join("")
}