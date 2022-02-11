import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Button } from 'react-bootstrap';

function FavoriteMovies ({ favoriteMovieList }) {
  return (
    <>
      <Row>
        <Col>
          <h2>Favorite Movies</h2>
        </Col>
      </Row>
      <Row>
        {favoriteMovieList.map((movies) => {
          return (
            <Col key={movies._id}>
              <img src={movies.ImagePath} />
              <Link to={`/movies/${movies._id}`}>
                <h4>{movies.Title}</h4>
              </Link>
              <Button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from favorites</Button>
            </Col>
         )
        })}
      </Row>
    </>
  )
}

export default FavoriteMovies
