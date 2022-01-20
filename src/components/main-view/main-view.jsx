import React from 'react';

import { MovieCard } from '../movie-card/movie-card';

import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Knives Out', 
          Description: 'A  film about a detective who investigates the death in a very disfunctional wealthy family',
          ImagePath: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Knives_Out_poster.jpeg'},
        { _id: 2, Title: 'Resevoir Dogs',
          Description: 'A  film about the aftermath of a jewelry heist gone wrong. The surviving criminals do not know who to trust within each other',
          ImagePath: 'https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png'},
        { _id: 3, Title: 'Shutter Island',
          Description: 'A US Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane',
          ImagePath: 'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg'}
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;