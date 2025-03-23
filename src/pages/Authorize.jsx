import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";

const Authorize = () => {
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
    gpurok: "",
  });

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "gcityMunicipality" && { gbarangay: "" }),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Submitting form data:", formData); // Log form data

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxs5mqVw0Mp6QHDktbgahIrq5a7SN8eFHW8DdYpH3o/dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, formType: "Authorize" }),
        }
      );

      console.log("Response status:", response.status); // Log response status

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data); // Log success response
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error); // Log error
      alert("Failed to submit form. Please try again.");
    }
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
      srelationship: "",
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
          <h2 className="text-center mb-4">Authorization Form</h2>
          <Form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-light.bg-gradient"
          >
            <h4 className="text-center mt-4">Guardian Information</h4>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="glastName"
                    value={formData.glastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="gfirstName"
                    value={formData.gfirstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="gmiddleName"
                    value={formData.gmiddleName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Select
                  name="gextensionName"
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
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="ggender"
                      value="Male"
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
                      checked={formData.ggender === "Female"}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Select
                  name="grelationship"
                  value={formData.grelationship}
                  onChange={handleChange}
                >
                  <option value="Parent">Parent</option>
                  <option value="Cousin">Cousin</option>
                  <option value="Auntie">Auntie</option>
                  <option value="Uncle">Uncle</option>
                  <option value="Concern Citizen">Concern Citizen</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="gbirthday"
                    value={formData.gbirthday}
                    onChange={handleChange}
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="gcontactNumber"
                    value={formData.gcontactNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className="text-center mt-4">Student Information</h4>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="slastName"
                    value={formData.slastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="sfirstName"
                    value={formData.sfirstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="smiddleName"
                    value={formData.smiddleName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Select
                  name="sextensionName"
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
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Male"
                      name="sgender"
                      value="Male"
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
                <Form.Group className="mb-3">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="sbirthday"
                    value={formData.sbirthday}
                    onChange={handleChange}
                    required
                    pattern="\d{4}-\d{2}-\d{2}"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
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

            <h4 className="text-center mt-4">Address</h4>
            <Form.Group className="mb-3">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                name="gregion"
                value={formData.gregion}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Province</Form.Label>
              <Form.Control
                type="text"
                name="gprovince"
                value={formData.gprovince}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>City/Municipality</Form.Label>
              <Form.Select
                name="gcityMunicipality"
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

            <Form.Group className="mb-3">
              <Form.Label>Barangay</Form.Label>
              <Form.Select
                name="gbarangay"
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

            <Form.Group className="mb-3">
              <Form.Label>Purok/Street/Blk.</Form.Label>
              <Form.Control
                type="text"
                name="gpurok"
                value={formData.gpurok}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Authorize;
