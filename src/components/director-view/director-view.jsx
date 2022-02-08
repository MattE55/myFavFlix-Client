import React from 'react';
import './director-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieCard } from '../movie-card/movie-card';

export class DirectorView extends React.Component {

  render() {
    const { movies, onBackClick } = this.props;
      if (!movies || movies.length === 0) {
        return null;
      }

    const firstMovie = movies[0];

    return (
      <>
      <Card>
        <Card.Body>
          <Card.Title>{firstMovie.Director.Name}</Card.Title>
          <Card.Text>{firstMovie.Director.Bio}</Card.Text>
          <Card.Text><span>Birth Year :</span>{firstMovie.Director.Birthyear}</Card.Text>
          <Card.Text><span>Death Year :</span>{firstMovie.Director.Deathyear}</Card.Text>
        </Card.Body>
      </Card>
      {movies.map(movie => <MovieCard movie={movie} key={movie._id}/>)}

      <Button onClick={() => { onBackClick(null); }}>Back</Button>

      </>
    );
  }
}