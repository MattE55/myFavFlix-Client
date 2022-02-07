import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './profile-view.scss';
import Button from 'react-bootstrap/Button';
import UpdateUser from './update-user';
import FavoriteMovies from './favorite-movies';
import UserInfo from './user-info';


import { Link } from "react-router-dom";


export function ProfileView({ movies, onUpdatedUserInfo }) {


  const [user, setUser] = useState ({

  })

  const favoriteMovieList = movies.filter{(movies) => {
    axios.get('https://my-favorite-flix.herokuapp.com/users/FavoriteMovies', {
    })
    .then(response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }};

  const getUser = () => {
    axios.get('https://my-favorite-flix.herokuapp.com/users/Username', {
      headers: { Authorization: `Bearer ${token}`}
      .then(response => {
        console.log(response);
        console.log(response.data);
        this.setState({
          users: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post('https://my-favorite-flix.herokuapp.com/users', {
        headers: { Authorization: `Bearer ${token}`},
          Username: username,
          Password: password,
      })
      .then(response =>{
          console.log(response);
          console.log(response.data);
      });
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const removeFav = (id) => {
      axios.del('https://my-favorite-flix.herokuapp.com/movies/:title', {
        headers: { Authorization: `Bearer ${token}`},
          FavoriteMovies: [id]
      })
      .then(response =>{
          console.log(response);
          console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault();    
      axios.put('https://my-favorite-flix.herokuapp.com/users', {
        headers: { Authorization: `Bearer ${token}`},
          Username: username,
          Password: password,
          Email: email
      })
      .then(response =>{
          console.log(response);
          console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  useEffect (() => {

  }, [])



  return (
    <div>
      <UserInfo name={user.Username} email={user.Email} />
      <FavoriteMovies favoriteMovieList={favoriteMovieList} />
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </div>
  );
}