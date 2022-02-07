import React from 'react';
import './director-view.scss';
import Button from 'react-bootstrap/Button';


export class DirectorView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;
      if (!movie) {
        return null;
      }

    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{movie.Director.Bio}</span>
        </div>
        <div className="director-birthyear">
          <span className="label">Birth Year: </span>
          <span className="value">{movie.Director.Birthyear}</span>
        </div>
        <div className="director-deathyear">
          <span className="label">Death Year: </span>
          <span className="value">{movie.Director.Deathyear}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       </div>
    );
  }
}