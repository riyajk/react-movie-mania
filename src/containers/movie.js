import {
  connect
} from 'react-redux';

import {history} from '../App'

import {
  fetchMovieList,showSelectedMovie
} from '../actions';

import MovieList from '../components/MovieList';

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList
  }
}
const mapDispatchToProps = (dispatch,ownProps,dispatchProps) => {
  return {
    getMovieList() {
      dispatch(fetchMovieList())
    },
    showMovieDetails(movieTitle){

      dispatch(showSelectedMovie(movieTitle));
      history.push(`/movies/${movieTitle}`)

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
