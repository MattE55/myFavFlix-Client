import React from "react";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
  return (
    <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Want to change some info?</h2>
      <label>Username:</label>
      <input type="text" name="Username" defaultValue={user.Username} />
      <label>Password</label>
      <input type="password" name="Password" defaultValue={user.Password} />
      <label>Email Address</label>
      <input type="email" name="Email" defaultValue={user.Email} />
      <button variant="primary" type="submit">
        Update
      </button>
    </form>
  );
}

export default UpdateUser;
