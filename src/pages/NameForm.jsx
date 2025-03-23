import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const NameForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    extensionName: "",
  });

  const extensionOptions = ["", "Jr.", "Sr.", "II", "III", "IV"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100" style={{ maxWidth: "500px" }}>
        <Col>
          <h2 className="text-center">Name Form</h2>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="middleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="extensionName">
              <Form.Label>Extension Name</Form.Label>
              <Form.Select
                name="extensionName"
                value={formData.extensionName}
                onChange={handleChange}
              >
                {extensionOptions.map((ext, index) => (
                  <option key={index} value={ext}>{ext}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NameForm;