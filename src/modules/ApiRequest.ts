import axios from 'axios';
import {Movie} from '../types';

const API_KEY = '502a5d3fbb295ecf72d3ed516b7e60ca';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'ko-KR',
  },
});

interface MovieResponse {
  poster_path: string | null;
  overview: string;
  release_date: string;
  id: number;
  original_title: string;
  title: string;
}

interface GetDiscoverMoviesResponse {
  page: number;
  results: MovieResponse[];
  total_results: number;
  total_pages: number;
}

interface GetDiscoverMoviesParams {
  releaseDateGte?: string;
  releaseDateLte?: string;
  page?: number;
}

export const getDiscoverMovies = async ({
  releaseDateGte,
  releaseDateLte,
  page,
}: GetDiscoverMoviesParams) => {
  // 개봉 예정 영화
  const response = await instance.get<GetDiscoverMoviesResponse>(
    'discover/movie',
    {
      params: {
        ['release_date.gte']: releaseDateGte,
        ['release_date.lte']: releaseDateLte,
        region: 'KR',
        page: page,
      },
    },
  );

  const movies: Movie[] = response.data.results.map<Movie>(rr => ({
    id: rr.id,
    title: rr.title,
    originalTitle: rr.original_title,
    releaseDate: rr.release_date,
    overview: rr.overview,
    posterUrl:
      rr.poster_path != null ? `${IMG_BASE_URL}/${rr.poster_path}` : null,
  }));

  return {
    page: response.data.page,
    results: movies,
    totalPages: response.data.total_pages,
    totalResults: response.data.total_results,
  };
};
