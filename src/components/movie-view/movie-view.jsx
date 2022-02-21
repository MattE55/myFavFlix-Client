import React from 'react';
import './movie-view.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Button } from 'react-bootstrap';


import { Link } from "react-router-dom";



export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
      if (!movie) {
        return null;
      }

    return (
      <Row className="justify-content-md-center">
      <Col md={7}>
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Card.Text>{movie.Director.Name}</Card.Text>
          <Card.Text>{movie.Genre.Name}</Card.Text>
          <Link to={`/director/${movie.Director.Name}`}>
            <Button variant="Primary">Director</Button>
          </Link>
          <Link to={`/genre/${movie.Genre.Name}`}>
            <Button variant="Secondary">Genre</Button>
          </Link>
          <Button variant="Primary" onClick={() => { onBackClick(null); }}>Back</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>
     
    );
  }
}
