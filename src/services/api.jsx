import axios from 'axios';
// import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'ce9ff11ff2b61f366eb027812f050c01';

export const getTrendingMovies = async signal => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`, {
      signal,
    });

    return response.data.results;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};

export const searchMovies = async (query, page, signal) => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
      { signal }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};

export const getMovieDetails = async (movieId, signal) => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY}&language=en-US`,
      { signal }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};

export const getMovieCredits = async (movieId, signal) => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
      { signal }
    );
    console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};

export const getMovieReviews = async (movieId, page, signal) => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`,
      { signal }
    );

    return response.data;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};
