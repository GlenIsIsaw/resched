import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const NameForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    extensionName: "N/A",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const extensionOptions = ["N/A", "Jr.", "Sr.", "II", "III", "IV"];

  useEffect(() => {
    localStorage.removeItem("formAccess");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateNameWithSheet = (formData) => {
    return new Promise((resolve, reject) => {
      const callbackName = `jsonp_${Date.now()}`;
      
      // Create URL with parameters
      const params = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        middleName: formData.middleName || "",
        extensionName: formData.extensionName,
        callback: callbackName
      });
  
      // Create script tag
      const script = document.createElement('script');
      script.src = `https://script.google.com/macros/s/AKfycbwqyz5wFLSHRR3xRc2ik0AvLmqPFTUasJYGOYTuBqRxU_pSst35H0RVC9AETPwy91o7/exec?${params}`;
      
      // Error handling
      script.onerror = () => {
        reject(new Error("Script load error"));
        cleanup();
      };
  
      // Set timeout
      const timeout = setTimeout(() => {
        reject(new Error("Request timeout"));
        cleanup();
      }, 10000);
  
      // Handle response
      window[callbackName] = (data) => {
        clearTimeout(timeout);
        resolve(data.authorized);
        cleanup();
      };
  
      const cleanup = () => {
        delete window[callbackName];
        document.body.removeChild(script);
      };
  
      // Inject script
      document.body.appendChild(script);
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  
    try {
      const isValid = await validateNameWithSheet(formData);
      if (isValid) {
        localStorage.setItem("formAccess", "true");
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/formopt");
      } else {
        setError("Name not found in our records. Please verify your details.");
      }
    } catch (err) {
      setError("Validation service unavailable. Please try again later.");
      console.error("Validation error:", err);
    } finally {
      setIsLoading(false);
    }
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
            
            {error && (
              <div className="alert alert-danger mb-3">
                {error}
              </div>
            )}
            
            <div className="d-flex justify-content-end button">
              <Button 
                type="submit" 
                variant="success" 
                className="button"
                disabled={isLoading}
              >
                {isLoading ? "Validating..." : "Submit"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NameForm;