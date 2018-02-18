import {connect} from 'react-redux';
import {MovieDetails} from '../components/MovieDetails';

const mapStateToProps = (state)=>{
  return {
    selectedMovie : state.movie.selectedMovie
  }
}

export default connect(mapStateToProps,null)(MovieDetails);
