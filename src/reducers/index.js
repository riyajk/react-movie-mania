import {
  combineReducers
} from 'redux';

import movie from './movie';
import pagination from './pagination';


const movieJunction = combineReducers({
  movie,pagination
});

export default movieJunction;
