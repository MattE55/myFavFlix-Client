import React from 'react';
import './genre-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

export class GenreView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
      if (!movie) {
        return null;
      }

    return (
      
      /*<Card>
        <Card.Body>
          <Card.Title>{movie.Genre.Name}</Card.Title>
          <Card.Text>{movie.Genre.Description}</Card.Text>
        </Card.Body>
      </Card>*/
      
      
      <div className="genre-view justify-content-md-center">
        <div className="genre-name">
          <span className="label">Name: </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Genre.Description}</span>
        </div>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </div>
    );
  }
}