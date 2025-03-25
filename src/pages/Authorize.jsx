import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Spinner,
} from "react-bootstrap";

const Authorize = () => {
  

  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  const navigate = useNavigate();
  
  useEffect(() => {
    const hasAccess = localStorage.getItem("formAccess");

    if (!hasAccess) {
      navigate("/nameform"); // 🚨 Redirect if accessed manually
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    glastName: "",
    gfirstName: "",
    gmiddleName: "",
    gextensionName: "",
    ggender: "",
    grelationship: "",
    gbirthday: "",
    gcontactNumber: "",
    slastName: "",
    sfirstName: "",
    smiddleName: "",
    sextensionName: "",
    sgender: "",
    srelationship: "",
    sbirthday: "",
    scontactNumber: "",
    gregion: "REGION V [Bicol Region]/050000000",
    gprovince: "CAMARINES NORTE/051600000",
    gcityMunicipality: "",
    gbarangay: "",
    gpurok: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const municipalities = {
    "BASUD/051601000": [
      "ANGAS/051601001",
      "BACTAS/051601002",
      "BINATAGAN/051601003",
      "CAAYUNAN/051601004",
      "GUINATUNGAN/051601005",
      "HINAMPACAN/051601006",
      "LANGA/051601007",
      "LANITON/051601008",
      "LIDONG/051601009",
      "MAMPILI/051601010",
      "MANDAZO/051601011",
      "MANGCAMAGONG/051601012",
      "MANMUNTAY/051601014",
      "MANTUGAWE/051601015",
      "MATNOG/051601016",
      "MOCONG/051601017",
      "OLIVA/051601018",
      "PAGSANGAHAN/051601019",
      "PINAGWARASAN/051601020",
      "PLARIDEL/051601021",
      "POBLACION 1/051601022",
      "POBLACION 2/051601034",
      "SAN FELIPE/051601025",
      "SAN JOSE/051601027",
      "SAN PASCUAL/051601028",
      "TABA-TABA/051601030",
      "TACAD/051601031",
      "TAISAN/051601032",
      "TUACA/051601033",
    ],
    "DAET (Capital)/051603000": [
      "ALAWIHAO/051603001",
      "AWITAN/051603002",
      "BAGASBAS/051603003",
      "BIBIRAO/051603004",
      "BORABOD/051603005",
      "CALASGASAN/051603006",
      "CAMAMBUGAN/051603007",
      "COBANGBANG (CARUMPIT)/051603008",
      "DOGONGAN/051603012",
      "GAHONON/051603013",
      "GUBAT/051603014",
      "LAG-ON/051603015",
      "MAGANG/051603018",
      "MAMBALITE/051603019",
      "MANCRUZ (MANGCRUZ)/051603021",
      "PAMORANGON/051603023",
      "BARANGAY I (POB.)/051603024",
      "BARANGAY II (POB.)/051603025",
      "BARANGAY III (POB.)/051603026",
      "BARANGAY IV (POB.)/051603027",
      "BARANGAY V (POB.)/051603028",
      "BARANGAY VI (POB.)/051603029",
      "BARANGAY VII (POB.)/051603030",
      "BARANGAY VIII (POB.)/051603031",
      "SAN ISIDRO/051603032",
    ],

    "MERCEDES/051607000": [
      "APUAO/051607001",
      "BARANGAY I (POB.)/051607002",
      "BARANGAY II (POB.)/051607003",
      "BARANGAY III (POB.)/051607004",
      "BARANGAY IV (POB.)/051607005",
      "BARANGAY V (POB.)/051607006",
      "BARANGAY VI (POB.)/051607007",
      "BARANGAY VII (POB.)/051607008",
      "CARINGO/051607009",
      "CATANDUNGANON/051607010",
      "CAYUCYUCAN/051607011",
      "COLASI/051607012",
      "DEL ROSARIO (TAGONGTONG)/051607013",
      "GABOC/051607014",
      "HAMORAON/051607015",
      "HINIPAAN/051607016",
      "LALAWIGAN/051607017",
      "LANOT/051607018",
      "MAMBUNGALON/051607019",
      "MANGUISOC/051607020",
      "MASALONGSALONG/051607021",
      "MATOOGTOOG/051607022",
      "PAMBUHAN/051607023",
      "QUINAPAGUIAN/051607024",
      "SAN ROQUE/051607025",
      "TARUM/051607026",
    ],

    "SAN LORENZO RUIZ (IMELDA)/051604000": [
      "DACULANG BOLO/051604001",
      "DAGOTDOTAN/051604002",
      "LANGGA/051604003",
      "LANITON/051604004",
      "MAISOG/051604005",
      "MAMPUROG/051604006",
      "MANLIMONSITO/051604007",
      "MATACONG (POB.)/051604008",
      "SALVACION/051604009",
      "SAN ANTONIO/051604010",
      "SAN ISIDRO/051604011",
      "SAN RAMON/051604012",
    ],
    "SAN VICENTE/051609000": [
      "ASDUM/051609001",
      "CABANBANAN/051609002",
      "CALABAGAS/051609003",
      "FABRICA/051609004",
      "IRAYA SUR/051609005",
      "MAN-OGOB/051609006",
      "POBLACION DISTRICT I (SILANGAN/BGY. 1)/051609007",
      "POBLACION DISTRICT II (KANLURAN/BGY. 2)/051609008",
      "SAN JOSE (IRAYA NORTE)/051609009",
    ],
    "TALISAY/051611000": [
      "BINANUAAN/051611001",
      "CAAWIGAN/051611002",
      "CAHABAAN/051611003",
      "CALINTAAN/051611004",
      "DEL CARMEN/051611005",
      "GABON/051611006",
      "ITOMANG/051611007",
      "POBLACION/051611008",
      "SAN FRANCISCO/051611009",
      "SAN ISIDRO/051611010",
      "SAN JOSE/051611011",
      "SAN NICOLAS/051611012",
      "SANTA CRUZ/051611013",
      "SANTA ELENA/051611014",
      "SANTO NIÑO/051611015",
    ],
    "VINZONS/051612000": [
      "AGUIT-IT/051612001",
      "BANOCBOC/051612002",
      "CAGBALOGO/051612004",
      "CALANGCAWAN NORTE/051612005",
      "CALANGCAWAN SUR/051612006",
      "GUINACUTAN/051612007",
      "MANGCAYO/051612008",
      "MANGCAWAYAN/051612009",
      "MANLUCUGAN/051612010",
      "MATANGO/051612011",
      "NAPILIHAN/051612012",
      "PINAGTIGASAN/051612013",
      "BARANGAY I (POB.)/051612014",
      "BARANGAY II (POB.)/051612015",
      "BARANGAY III (POB.)/051612016",
      "SABANG/051612017",
      "SANTO DOMINGO/051612018",
      "SINGI/051612019",
      "SULA/051612020",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFormData = {
        ...prevData,
        [name]: value,
        ...(name === "gcityMunicipality" && { gbarangay: "" }),
      };

      // Check if all required fields are filled
      const requiredFields = [
        "glastName",
        "gfirstName",
        "ggender",
        "grelationship",
        "gbirthday",
        "gcontactNumber",
        "slastName",
        "sfirstName",
        "sgender",
        "sbirthday",
        "scontactNumber",
        "gcityMunicipality",
        "gbarangay",
        "gpurok",
      ];

      const isComplete = requiredFields.every((field) => {
        const val = updatedFormData[field];
        return val?.trim() !== "";
      });

      setIsFormValid(isComplete); // Update state
      return updatedFormData;
    });
  };

  const handleReview = () => {
    if (!isSubmitted) {
      setShowModal(true); // Only show Review Modal if form is not submitted
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx-e2kcBr7yLFe8Pf1UA64qFO7AHichoTLy4LmaEXh4qVDjQvf3WGLOOS-nC3iiG4Uk/exec";

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataObj,
        // <== This prevents the CORS error
      });

      console.log("Form submitted successfully.");
      setShowSuccessModal(true); // Show success modal
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false); // Stop submission
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    navigate("/"); // Redirect to NameForm page
  };

  const handleReset = () => {
    setFormData({
      glastName: "",
      gfirstName: "",
      gmiddleName: "",
      gextensionName: "",
      ggender: "",
      grelationship: "",
      gbirthday: "",
      gcontactNumber: "",
      slastName: "",
      sfirstName: "",
      smiddleName: "",
      sextensionName: "",
      sgender: "",
      sbirthday: "",
      scontactNumber: "",
      gregion: "REGION V [Bicol Region]/050000000",
      gprovince: "CAMARINES NORTE/051600000",
      gcityMunicipality: "",
      gpurok: "",
    });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4 text-uppercase fw-bold">
            Authorization Form
          </h2>
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-light.bg-gradient border-success border-2"
          >
            <h4 className="text-center my-4">Guardian Information</h4>
            <hr />
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="glastName"
                    className="border-3 border-success"
                    value={formData.glastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="gfirstName"
                    className="border-3 border-success"
                    value={formData.gfirstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="gmiddleName"
                    className="border-3 border-success"
                    value={formData.gmiddleName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Extension Name</Form.Label>
                  <Form.Select
                    name="gextensionName"
                    className="border-3 border-success"
                    value={formData.gextensionName}
                    onChange={handleChange}
                  >
                    <option value="N/A">N/A</option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="ggender"
                      value="Male"
                      className="custom-radio"
                      checked={formData.ggender === "Male"}
                      onChange={handleChange}
                      required
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="ggender"
                      value="Female"
                      className="custom-radio"
                      checked={formData.ggender === "Female"}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Relationship to Beneficiary</Form.Label>
                  <Form.Select
                    name="grelationship"
                    className="border-3 border-success"
                    value={formData.grelationship}
                    onChange={handleChange}
                    required
                  >
                    <option value="N/A">N/A</option>
                    <option value="Parent">Parent</option>
                    <option value="Cousin">Cousin</option>
                    <option value="Auntie">Auntie</option>
                    <option value="Uncle">Uncle</option>
                    <option value="Concern Citizen">Concern Citizen</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="gbirthday"
                    className="border-3 border-success"
                    value={formData.gbirthday}
                    onChange={handleChange}
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="gcontactNumber"
                    className="border-3 border-success"
                    value={formData.gcontactNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className="text-center my-4">Student Information</h4>
            <hr />
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="slastName"
                    className="border-3 border-success"
                    value={formData.slastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="sfirstName"
                    className="border-3 border-success"
                    value={formData.sfirstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="smiddleName"
                    className="border-3 border-success"
                    value={formData.smiddleName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Extension Name</Form.Label>
                  <Form.Select
                    name="sextensionName"
                    className="border-3 border-success"
                    value={formData.sextensionName}
                    onChange={handleChange}
                  >
                    <option value="N/A">N/A</option>
                    <option value="Jr.">Jr.</option>
                    <option value="Sr.">Sr.</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                    <option value="V">V</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="sgender"
                      value="Male"
                      className="custom-radio"
                      checked={formData.sgender === "Male"}
                      onChange={handleChange}
                      required
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Female"
                      name="sgender"
                      value="Female"
                      className="custom-radio"
                      checked={formData.sgender === "Female"}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="sbirthday"
                    className="border-3 border-success"
                    value={formData.sbirthday}
                    onChange={handleChange}
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 label">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="scontactNumber"
                    value={formData.scontactNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className="text-center mt-4">Guardian Address</h4>
            <hr />
            <Form.Group className="mb-3 label">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                name="gregion"
                value={formData.gregion}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3 label">
              <Form.Label>Province</Form.Label>
              <Form.Control
                type="text"
                name="gprovince"
                value={formData.gprovince}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3 label">
              <Form.Label>City/Municipality</Form.Label>
              <Form.Select
                name="gcityMunicipality"
                className="border-3 border-success"
                value={formData.gcityMunicipality}
                onChange={handleChange}
                required
              >
                <option value="">Select Municipality</option>
                {Object.keys(municipalities).map((municipality, index) => (
                  <option key={index} value={municipality}>
                    {municipality}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 label">
              <Form.Label>Barangay</Form.Label>
              <Form.Select
                name="gbarangay"
                className="border-3 border-success"
                value={formData.gbarangay}
                onChange={handleChange}
                required
                disabled={
                  !formData.gcityMunicipality ||
                  !municipalities[formData.gcityMunicipality]
                }
              >
                <option value="">Select Barangay</option>
                {municipalities[formData.gcityMunicipality]?.map(
                  (gbarangay, index) => (
                    <option key={index} value={gbarangay}>
                      {gbarangay}
                    </option>
                  )
                )}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 label">
              <Form.Label>Purok/Street/Blk.</Form.Label>
              <Form.Control
                type="text"
                name="gpurok"
                className="border-3 border-success"
                value={formData.gpurok}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex mb-3 label my-4">
              <Button
                variant="danger"
                onClick={() => navigate("/formopt")}
                className="me-auto p-2"
              >
                Back
              </Button>

              <Button
                variant="secondary"
                className="p-2 me-2"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="success"
                className="p-2"
                onClick={handleReview}
                disabled={!isFormValid || isSubmitted} // Disable when the form is incomplete
              >
                Review
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Review Your Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center text-uppercase fw-bold">
            Guardian Infromation
          </p>
          <hr className="mx-2" />
          <p>
            <strong>Last Name:</strong> {formData.glastName}
          </p>
          <p>
            <strong>First Name:</strong> {formData.gfirstName}
          </p>
          <p>
            <strong>Middle Name:</strong> {formData.gmiddleName}
          </p>
          <p>
            <strong>Extension Name:</strong> {formData.gextensionName}
          </p>
          <p>
            <strong>Birthday (YYYY-MM-DD):</strong> {formData.gbirthday}
          </p>
          <p>
            <strong>Updated Contact Number:</strong> {formData.gcontactNumber}
          </p>
          <p>
            <strong>Gender:</strong> {formData.ggender}
          </p>
          <p>
            <strong>Relationship to Beneficary:</strong>{" "}
            {formData.grelationship}
          </p>
          <br />
          <p className="text-center text-uppercase fw-bold">
            Student Infromation
          </p>
          <hr className="mx-2" />
          <p>
            <strong>Last Name:</strong> {formData.slastName}
          </p>
          <p>
            <strong>First Name:</strong> {formData.sfirstName}
          </p>
          <p>
            <strong>Middle Name:</strong> {formData.smiddleName}
          </p>
          <p>
            <strong>Extension Name:</strong> {formData.sextensionName}
          </p>
          <p>
            <strong>Birthday (YYYY-MM-DD):</strong> {formData.sbirthday}
          </p>
          <p>
            <strong>Updated Contact Number:</strong> {formData.scontactNumber}
          </p>
          <p>
            <strong>Gender:</strong> {formData.sgender}
          </p>
          <br />
          <p className="text-center text-uppercase fw-bold">Guardian Address</p>
          <hr className="mx-2" />
          <p>
            <strong>Region:</strong> {formData.gregion}
          </p>
          <p>
            <strong>Province:</strong> {formData.gprovince}
          </p>
          <p>
            <strong>City/Municipality:</strong> {formData.gcityMunicipality}
          </p>
          <p>
            <strong>Barangay:</strong> {formData.gbarangay}
          </p>
          <p>
            <strong>Purok/Street/Blk:</strong> {formData.gpurok}
          </p>

          <div className="d-flex justify-content-center mt-5">
            <Form.Group controlId="confirmCheckbox">
              <Form.Check
                type="checkbox"
                label="I confirm that all of the information that I input are all correct."
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Edit
          </Button>
          <Button
            variant="success"
            onClick={handleSubmit}
            disabled={!isConfirmed || isSubmitting} // Disable during submission
          >
            {isSubmitting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="ms-2">Submitting...</span>
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSuccessModal}
        onHide={handleSuccessClose}
        centered
        backdrop="static" // Prevent closing by clicking outside
        keyboard={false} // Prevent closing by pressing ESC
      >
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="green"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>
          <p>Your form has been successfully submitted!</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="success" onClick={handleSuccessClose}>
           Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Authorize;
