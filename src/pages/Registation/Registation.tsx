import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface IProps {
  show: boolean;
  handleCloseModal: () => void;
}
const Registation = ({ show, handleCloseModal }: IProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    conf_password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      conf_password: "",
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can do something with the form data, like send it to a server
    console.log(formData);
    // Close the modal after form submission
    handleCloseModal();
  };

  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Registration</Modal.Title>
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
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
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
          <Form.Group controlId="formPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="conf_password"
              value={formData.conf_password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-2">
            Register
          </Button>
          <Button
            variant="default"
            type="reset"
            className="m-2"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Registation;
