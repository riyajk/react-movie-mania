const movie = (state = {
  movieList: [],
  startDoc: 0,
  limit: 20,
  selectedMovie: {}
}, action) => {

  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case 'LOAD_MOVIE_LIST':
      return {
        ...newState,
        movieList: [...state.movieList, ...action.movieList],
        startDoc: state.startDoc + state.limit
      }
    case "SHOW_MOVIE_DETAILS":
      return {
        ...newState,
        selectedMovie: action.selectedMovie
      }
    default:
      return {
        ...newState
      }
  }
}


export default movie;
