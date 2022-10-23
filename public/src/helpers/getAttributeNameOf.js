export function getAttributeNameOf(listItem) {
  let converter = {
    all: "",

    tv: "tv",
    movies: "movie",
    people: "person",

    archived: "archived",
    "to be seen": "TBS",
  }

  return converter[listItem]
}