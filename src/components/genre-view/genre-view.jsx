import React from 'react';
import './genre-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieCard } from '../movie-card/movie-card';

export class GenreView extends React.Component {

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
          <Card.Title>{firstMovie.Genre.Name}</Card.Title>
          <Card.Text>{firstMovie.Genre.Description}</Card.Text>
        </Card.Body>
      </Card>
      {movies.map(movie => <MovieCard movie={movie} key={movie._id}/>)}

      <Button onClick={() => { onBackClick(null); }}>Back</Button>

      </>
    );
  }
}