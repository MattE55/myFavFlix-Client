import React from 'react';
import './movie-view.scss';


export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

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
        <Route path="/movies/:movieId" render={({ match, history }) => {
          return <Col md={8}>
          <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
        </Col>
}} />
       </div>
    );
  }
}