import React from 'react';
import axios from 'axios';
import './main-view.scss';

import { BrowserRouter as Router, Route , Redirect } from "react-router-dom";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { RegistrationView } from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import MenuBar from '../navbar/navbar';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [ ],
      selectedMovie: null,
      user: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  getMovies(token) {
    axios.get('https://my-favorite-flix.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { movies, user , onBackClick } = this.state;
    
    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <Row>
        <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
        </Col>
      </Row>
    

    return (
      <Router>
        <MenuBar user={user} />
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view"></div>
            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/movies/:movieId" render={({ match }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack ()} />
            </Col>
          }} />
          <Route path="/director/:name" render={({ match }) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
            <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack ()}  />
            </Col>
          }}/>
          <Route path="/genre/:name" render={({ match }) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
            <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack ()}  />
          </Col>
          }} /> 
          <Route path="/register" render={() => {
            if (user) return <Redirect to ="/" />
            return <Col lg={8} md={8}>
              <RegistrationView />
            </Col>
          }} />
          <Route path="/movies/:id" render={({ match, history }) => {
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.id)} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path="/movie-director/:id" render={({ match, history }) => {
            return <Col>
              <DirectorView movie={movies.find(m => m._id === match.params.id)} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path={`/users/${user}`} render={({ history }) => {
            if (!user) return <Redirect to="/" />
            return <Col>
              <ProfileView user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />
          <Route path={`/user-update/${user}`} render={({ history }) => {
            if (!user) return <Redirect to="/" />
            return <Col>
              <UserUpdate user={user} onBackClick={() => history.goBack()} />
            </Col>
          }} />
        </Row>
      </Router>
    );
  }
}

export default MainView;