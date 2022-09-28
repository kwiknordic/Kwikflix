

const endpoints = { 
  get conf() { return "/configuration" },
  confLang: "/configuration/languages",
  topRated: "/movie/top_rated",
  trending: {
    movie: "/trending/movie/week",
    tv: "/trending/tv/week",
  },
  videos: "/videos",
}