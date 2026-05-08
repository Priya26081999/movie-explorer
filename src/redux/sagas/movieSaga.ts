import type { AxiosResponse } from "axios";
import type {  MovieDetails, MoviesResponse } from "../../interfaces/movie";
import { fetchMovieDetails, fetchPopularMovies } from "../api";
import { fetchMovieDetailsFailure, fetchMovieDetailsRequest, fetchMovieDetailsSuccess, fetchMoviesFailure, fetchMoviesRequest, fetchMoviesSuccess } from "../slices/movieSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import type { PayloadAction } from "@reduxjs/toolkit";


function* handleFetchMovies(){
    try{
         console.log("Saga started");
        const response:AxiosResponse<MoviesResponse>=yield call(
            fetchPopularMovies);

        console.log(response)

        yield put(fetchMoviesSuccess(response.data.results))
    }catch(error:any){
        yield put(fetchMoviesFailure(error.message))
    }
}


function* handleFetchMovieDetails(action:PayloadAction<number>) {
  try {
    const id = action.payload;
    const response: AxiosResponse<MovieDetails> = yield call(
    fetchMovieDetails,
      id
    );

    yield put(fetchMovieDetailsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchMovieDetailsFailure(error.message));
  }
}


export function* movieSaga(){
    yield takeLatest(fetchMoviesRequest.type, handleFetchMovies);
    yield takeLatest(fetchMovieDetailsRequest.type, handleFetchMovieDetails);
}


