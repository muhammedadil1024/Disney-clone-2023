import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "c1d6e090db6b226fcb5dcffc40e7e64d";

const movieByGenereBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=c1d6e090db6b226fcb5dcffc40e7e64d";

// https://api.themoviedb.org/3/trending/all/day?api_key=c1d6e090db6b226fcb5dcffc40e7e64d
const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenereId = (id) => axios.get(movieByGenereBaseUrl + "&with_genres=" + id);

export { getTrendingMovies, getMovieByGenereId };