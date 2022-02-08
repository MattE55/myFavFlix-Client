import React, { useEffect, useState } from "react";
import axios from "axios";

import "./profile-view.scss";
import UpdateUser from "./update-user";
import FavoriteMovies from "./favorite-movies";
import UserInfo from "./user-info";

export function ProfileView({ movies, onUpdatedUserInfo }) {
  const [user, setUser] = useState();

  const favoriteMovieList = movies?.filter((movies) => {
    return user && user.FavoriteMovies.includes(movies._id);
  });

  const getUser = (token) => {
    const username = localStorage.getItem("user");

    axios
      .get("https://my-favorite-flix.herokuapp.com/users/"+username, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (username && token) {
      getUser(token);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log(token);

    const { Username, Password, Email } = e.target;

    axios
    .put( "https://my-favorite-flix.herokuapp.com/users/" + username,
    {
      Username: Username.value,
      Password: Password.value,
      Email: Email.value,
    },{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const removeFav = (movieId) => {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .delete(
        `https://my-favorite-flix.herokuapp.com/users/${username}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

if(!user) return null;

  return (
    <div>
      <UserInfo name={user.Username} email={user.Email} />
      <FavoriteMovies
        favoriteMovieList={favoriteMovieList}
        removeFav={removeFav}
      />
      <UpdateUser handleSubmit={handleSubmit} user={user}/>
    </div>
  );
}