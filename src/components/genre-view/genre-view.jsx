import React from 'react';
import './genre-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieCard } from '../movie-card/movie-card';
import { Col, Row, Button } from 'react-bootstrap';

export class GenreView extends React.Component {

  render() {
    const { movies, onBackClick } = this.props;
      if (!movies || movies.length === 0) {
        return null;
      }

    const firstMovie = movies[0];

    return (
      <>
      <Row className="justify-content-md-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{firstMovie.Genre.Name}</Card.Title>
              <Card.Text>{firstMovie.Genre.Description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center" md={8}>
        <Col md={8}>
          <Card>
            <Card.Body>
              {movies.map(movie => <MovieCard movie={movie} key={movie._id}/>)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      

      <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>

      </>
    );
  }
}