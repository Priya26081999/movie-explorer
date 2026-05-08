import axios from 'axios';
import type{ MovieDetails, MoviesResponse } from '../interfaces/movie';


const API_Key = import.meta.env.VITE_MOVIE_API_KEY;


const BASE_URL="https://api.themoviedb.org/3";

export const fetchPopularMovies=async()=>{
    return axios.get<MoviesResponse>(
        `${BASE_URL}/movie/popular?api_key=${API_Key}`
    )
}

export const fetchMovieDetails=async(id:number)=>{
    return axios.get<MovieDetails>(
        `${BASE_URL}/movie/${id}?api_key=${API_Key}`
        
    )
}