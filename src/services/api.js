const key = import.meta.env.VITE_TMDB_KEY;

const api = {
  // Movies
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  
  // TV Shows
  requestTVTrending: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US`,
  requestTVPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestTVTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTVAction: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10759`,
  requestTVComedy: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=35`,

  // Movies Specific
  requestMoviesTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US`,

  // Search
  requestSearch: `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&include_adult=false&query=`,
};

export default api;
