import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {MovieRow} from './MovieRow';

import {didScrollToBottom} from '../helper'

export default class MovieList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovieList();
  }

  checkScrollToBottom = (objThis) => {

    let shouldLoadMoreData = didScrollToBottom(objThis);

    if (shouldLoadMoreData) {
      this.props.getMovieList();
    }
  }

  getMovieList = () => {

    this.props.getMovieList();
  }

  showMovieDetails=(movieTitle)=>{

    this.props.showMovieDetails(movieTitle);

  }

  render() {

    let movieListRow = [];
    this.props.movieList.forEach((movie, key) => movieListRow.push(<MovieRow movie={movie} showMovieDetails={this.showMovieDetails} key={key}/>));

    return (<div className="col m10 offset-m1" onScroll={() => this.checkScrollToBottom(this)} style={{
        height: '450px',
        overflowY: 'scroll'
      }}>
      <table className="striped table-border">
        <thead>
          <tr>
            <th >Title</th>
            <th>Release Date</th>
            <th>Actors</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {movieListRow}
        </tbody>
      </table>

    </div>);
  }

}
