export function resolveTitleName(media) {
  let originalTitle;

  if (media == "movie") originalTitle = "original_title"
  if (media == "tv") originalTitle = "original_name"
  if (media == "person") originalTitle = "name"

  return originalTitle
}