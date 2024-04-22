import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface IProps {
  showLogin: boolean;
  handleCloseModalLogin: () => void;
}
const Login = ({ showLogin, handleCloseModalLogin }: IProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can do something with the form data, like send it to a server
    console.log(formData);
    // Close the modal after form submission
    handleCloseModalLogin();
  };

  return (
    <Modal show={showLogin} onHide={handleCloseModalLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-2">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
