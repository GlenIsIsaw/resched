import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

const FormOpt = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [language, setLanguage] = useState("tagalog");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Napiling Opsyon:", selectedOption);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tagalog" ? "english" : "tagalog");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-end mb-3">
            <ToggleButtonGroup
              type="radio"
              name="language"
              defaultValue={language}
            >
              <ToggleButton
                id="tbg-radio-1"
                variant="outline-success"
                onClick={toggleLanguage}
              >
                {language === "tagalog" ? "English" : "Tagalog"}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <h2 className="text-center">
            {language === "tagalog"
              ? "Dahilan ng Kahilingan"
              : "Reason for Request"}
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-grey"
          >
            <Form.Group className="mb-3">
              <Form.Label>
                {language === "tagalog"
                  ? "Piliin ang iyong dahilan:"
                  : "Select your reason:"}
              </Form.Label>
              <div>
                <Form.Check
                  className="my-3"
                  style={{ borderWidth: "3px" }}
                  type="radio"
                  label={
                    language === "tagalog"
                      ? "Hindi ko natanggap ang aking tulong pang-edukasyon dahil sa personal na dahilan."
                      : "I was unable to receive my educational assistance due to personal reasons."
                  }
                  name="options"
                  value="Personal Reason"
                  checked={selectedOption === "Personal Reason"}
                  onChange={handleChange}
                />
                <Form.Check
                  className="my-3"
                  style={{ borderWidth: "3px" }}
                  type="radio"
                  label={
                    language === "tagalog"
                      ? "Nais kong bigyan ng pahintulot ang aking magulang, kapatid, o kamag-anak upang kunin ang aking tulong pang-edukasyon dahil ako ay malayo sa Camarines Norte at may abalang iskedyul."
                      : "I want to authorize my parent, sibling, or relative to receive my educational assistance because I am far from Camarines Norte and have a busy schedule."
                  }
                  name="options"
                  value="Authorize Representative"
                  checked={selectedOption === "Authorize Representative"}
                  onChange={handleChange}
                />
                <Form.Check
                  className="my-3"
                  style={{ borderWidth: "3px" }}
                  type="radio"
                  label={
                    language === "tagalog"
                      ? "Nakapagtapos na ako, at handa akong ibigay ang aking puwesto sa aking kapatid, pinsan, o isang kakilala ko."
                      : "I have already graduated, and I am willing to give my slot to my sibling, cousin, or someone I know."
                  }
                  name="options"
                  value="Graduate"
                  checked={selectedOption === "Graduate"}
                  onChange={handleChange}
                />
                <Form.Check
                  className="my-3"
                  style={{ borderWidth: "3px" }}
                  type="radio"
                  label={
                    language === "tagalog"
                      ? "Hindi ko napansin ang aking iskedyul at nais ko ng isa pang pagkakataon."
                      : "I did not notice my schedule and would like another opportunity."
                  }
                  name="options"
                  value="Missed Schedule"
                  checked={selectedOption === "Missed Schedule"}
                  onChange={handleChange}
                />
                <Form.Check
                  className="my-3"
                  style={{ borderWidth: "3px" }}
                  type="radio"
                  label={
                    language === "tagalog" ? "Iba pang dahilan" : "Other reason"
                  }
                  name="options"
                  value="Other"
                  checked={selectedOption === "Other"}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" variant="success">
                {language === "tagalog" ? "Isumite" : "Submit"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormOpt;
