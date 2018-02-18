import axios from 'axios';
const loadMovies = (movieList) => ({
  type: 'LOAD_MOVIE_LIST',
  movieList
});

export const fetchMovieList = () => {

  return (dispatch, getState) => {

    let startDoc = getState().movie.startDoc,
    limit = getState().movie.limit;

    axios.get(`http://localhost:3001/movie?start=${startDoc}&limit=${limit}`).then((result) => dispatch(loadMovies(result.data.list)))

  }
}


export const showSelectedMovie = (movieTitle)=>{

  return(dispatch,getState)=>{

      const movieList = getState().movie.movieList;
      const selectedMovie =  movieList.find((oneMovie)=>oneMovie.title==movieTitle);

      dispatch({type : "SHOW_MOVIE_DETAILS",selectedMovie});
  }



}
