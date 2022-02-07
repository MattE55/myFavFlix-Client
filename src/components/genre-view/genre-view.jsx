import React from 'react';
import './genre-view.scss';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

export class GenreView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
      if (!movie) {
        return null;
      }

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="label">Name: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Genre.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       </div>
    );
  }
}