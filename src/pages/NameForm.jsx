import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

const NameForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form Data Submitted:", formData);
  
    // Debugging Step
    console.log("✅ Storing session token...");
    localStorage.setItem("formCompleted", "true");
  
    // Log the navigate call
    console.log("✅ Redirecting to /formopt...");
    navigate("/formopt");  // Ensure this matches the route in your app
  };
  

  // ✅ Define state FIRST before using it
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    extensionName: "",
  });

  const extensionOptions = ["N/A", "Jr.", "Sr.", "II", "III", "IV"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100" style={{ maxWidth: "500px" }}>
        <Col>
          <h2 className="text-center fw-bold text-uppercase mb-4">
            EA Re-Schedule Form 2025
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-light border-2 border-success"
          >
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label className="label">First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                className="border-3 border-success"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="middleName">
              <Form.Label className="label">Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="middleName"
                className="border-3 border-success"
                value={formData.middleName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label className="label">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                className="border-3 border-success"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="extensionName">
              <Form.Label className="label">Extension Name</Form.Label>
              <Form.Select
                name="extensionName"
                className="border-3 border-success"
                value={formData.extensionName}
                onChange={handleChange}
              >
                {extensionOptions.map((ext, index) => (
                  <option key={index} value={ext}>
                    {ext}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end button">
              <Button type="submit" variant="success" className="button">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NameForm;
