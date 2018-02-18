import React from 'react';
import '../css/main.css';
export const MovieRow = ({movie,showMovieDetails}) => {

  const releaseDate = new Date(movie.info.release_date);
  const formattedDate = new Intl.DateTimeFormat('en-US').format(releaseDate);

  return (<tr>
    <td>
      <span className="movie-title" onClick={()=>showMovieDetails(movie.title)}>{movie.title}
      </span>
      <span className="movie-span" onClick={()=>showMovieDetails(movie.title)}>
        <img className="movie-image" src={movie.info.image_url}></img>
      </span>
    </td>
    <td>{formattedDate}</td>
    <td>{
        movie.info.actors.map((ele, key) =>< li key = {
          key
        } > {
          ele
        }</li>)
      }</td>
    <td>{
        movie.info.genres.map((ele, key) =>< li key = {
          key
        } > {
          ele
        }</li>)
      }</td>
  </tr>)
};
