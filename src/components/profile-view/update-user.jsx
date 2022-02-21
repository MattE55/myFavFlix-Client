import React from "react";
import { Form } from "react-bootstrap";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
  return (
    <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <h4>Want to change some info?</h4>
        <Form.Label>Username:</Form.Label>
        <Form.Control 
          type="text" 
          name="Username" 
          defaultValue={user.Username}
          placeholder="Enter a Username" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="Password" 
            defaultValue={user.Password} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="email" 
            name="Email" 
            defaultValue={user.Email} />
      </Form.Group>
          <button variant="primary" type="submit">
            Update
          </button>
    </form>
  );
}

export default UpdateUser;