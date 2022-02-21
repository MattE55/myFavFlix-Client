import React from 'react';
import './director-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieCard } from '../movie-card/movie-card';
import { Col, Row, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {

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
              <Card.Title>{firstMovie.Director.Name}</Card.Title>
              <Card.Text>{firstMovie.Director.Bio}</Card.Text>
              <Card.Text><span>Birth Year :</span>{firstMovie.Director.Birthyear}</Card.Text>
              <Card.Text><span>Death Year :</span>{firstMovie.Director.Deathyear}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={7}>
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
