import React from 'react';
import {Link} from 'react-router-dom';

export const MovieDetails = ({match,selectedMovie}) => {
console.log(selectedMovie);
  if(!selectedMovie.info){
      return(<div className="row"><div className="notification col m6 push-m3"><h5>Please select the movie from <Link to= "/">Movie List.</Link></h5></div></div>);
  }
  const releaseDate = new Date(selectedMovie.info.release_date);
  const formattedDate = new Intl.DateTimeFormat('en-US').format(releaseDate);

  return (
  <div className = "row" >
    <div className="col m-3">
      <span className="movie-span">
        <img  src={selectedMovie.info.image_url}></img>
      </span>
    </div>
    <div className="col m-9">
      <div className="row">
        <label className="movie-title"><h1><b>{selectedMovie.title}</b></h1></label>
        <label><h5> <b>Directors : </b>{(selectedMovie.info.directors)}  </h5></label>
        <label><h5><b>Releas year : </b>{formattedDate}</h5></label>
        <label><h5> <b>Genres :  </b>{selectedMovie.info.genres.join(', ')}</h5></label>
        <span><i className="material-icons">{("star ").repeat(selectedMovie.info.rating)}</i></span>
      </div>
      <div className="row">
        <label><h5><b>Plot</b></h5></label>
        <span className="plot">{selectedMovie.info.plot}</span>
      </div>
      <div className="row">
        <label><h5><b>Cast</b></h5></label>
        <span>{selectedMovie.info.actors.join(', ')}</span>
      </div>
    </div>
  </div>);
  }
