import React from 'react';
import './movie-view.scss';
import Button from 'react-bootstrap/Button';


import { Link } from "react-router-dom";



export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
      if (!movie) {
        return null;
      }

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
        <Link to={`/director/${movie.Director.Name}`}>
          <Button variant="link">Director</Button>
        </Link>
        <Link to={`/genre/${movie.Genre.Name}`}>
          <Button variant="link">Genre</Button>
        </Link> 
       </div>
    );
  }
}