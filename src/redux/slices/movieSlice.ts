
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie, MovieDetails } from "../../interfaces/movie";
import type { RootState } from "../store";

  
 interface MovieState{
    movies:Movie[],
    loading:boolean,
    error:string | null;
selectedMovie: MovieDetails | null;
    
 }

 const initialState:MovieState={
    movies:[],
    loading:false,
    error:null,
    selectedMovie: null,


 }

const movieSlice= createSlice({

    name:"movies",
    initialState,
    reducers:{
        fetchMoviesRequest:(state)=>{
            state.loading=true
        },
        fetchMoviesSuccess:(state,action:PayloadAction<Movie[]>)=>{
            state.loading=false;
            state.movies=action.payload;
        },
         fetchMoviesFailure:(state,action:PayloadAction<string>)=>{
            state.loading=false;
            state.error=action.payload;

         },

         fetchMovieDetailsRequest: (state) => {
  state.loading = true;
},
fetchMovieDetailsSuccess: (state, action: PayloadAction<MovieDetails>) => {
  state.loading = false;
  state.selectedMovie = action.payload;
},
fetchMovieDetailsFailure: (state, action: PayloadAction<string>) => {
  state.loading = false;
  state.error = action.payload;
},

    }
    
});

export const {fetchMoviesRequest,fetchMoviesSuccess,fetchMoviesFailure,
     fetchMovieDetailsRequest,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsFailure,
}=movieSlice.actions;

export const selectAllMovies=(state:RootState)=>state.movies.movies;
export const selectMoviesLoading=(state:RootState)=>state.movies.loading;
export const selectMoviesError = (state: RootState) => state.movies.error;
export const selectSelectedMovie = (state: RootState) =>state.movies.selectedMovie;



export default movieSlice.reducer;


