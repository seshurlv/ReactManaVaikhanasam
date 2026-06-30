// PURPOSE: Registration form UI - collects user details and calls register API

import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Container, Row, Col, Card, CardBody, CardHeader,
  Form, FormGroup, Label, Input, Button, Alert,
  InputGroup, InputGroupAddon, InputGroupText, FormFeedback
} from "reactstrap";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import { registerUser } from "services/authService.js";


const INITIAL_FORM = {
  full_name: "", gotram: "", phone: "",
  email: "", password: "", confirm_password: ""
};

function SignupPage() {
  const history = useHistory();
  const [form, setForm]           = useState(INITIAL_FORM);
  const [errors, setErrors]       = useState({});
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [apiMsg, setApiMsg]       = useState({ type: "", text: "" });

  useEffect(() => {
    document.body.classList.add("signup-page", "sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("signup-page", "sidebar-collapse");
    };
  }, []);

  const validate = (name, value) => {
    switch (name) {
      case "full_name":
        return value.trim().length < 3 ? "Minimum 3 characters required" : "";
      case "gotram":
        return !value ? "Please select your Gotram" : "";
      case "phone":
        return !/^\+?[0-9]{10}$/.test(value) ? "Enter valid phone number" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Enter valid email" : "";      
      case "password":
        if (value.length < 8) return "Minimum 8 characters";
        if (!/[A-Z]/.test(value)) return "Must include one uppercase letter";
        if (!/[0-9]/.test(value)) return "Must include one number";
        return "";
      case "confirm_password":
        return value !== form.password ? "Passwords do not match" : "";
      default: return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiMsg({ type: "", text: "" });

    // Validate all fields before submitting
    const newErrors = {};
    let isValid = true;

    Object.keys(form).forEach(key => {
      const err = validate(key, form[key]);
      if (err) { newErrors[key] = err; isValid = false; }
    });

    setErrors(newErrors);
    if (!isValid) return;

    setLoading(true);

    try {
      // Remove confirm_password before sending to API
      const { confirm_password, ...payload } = form;
      const data = await registerUser(payload);

      if (data.success) {
        setApiMsg({ type: "success", text: data.message });
        setForm(INITIAL_FORM);
        setTimeout(() => history.push("/"), 3000);
      } else {
        setApiMsg({ type: "danger", text: data.message || "Registration failed" });
      }
    } catch {
      setApiMsg({ type: "danger", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const fieldState = (name) => {
    if (errors[name]) return "has-danger";
    if (!errors[name] && form[name]) return "has-success";
    return "";
  };

  return (
    <>
      <ScrollTransparentNavbar />

      <div className="page-header page-header-small">
        <div
          className="page-header-image" style={{ 
            backgroundImage: "url(" + require('../assets/img/banners/signup2.jpg') + ")"
          }}          
        />
        <div className="content-center">
          <h2 className="title text-white">Join ManaVaikhanasam</h2>
          <p className="text-white">
            Register to connect with the Vaikhanasa community
          </p>
        </div>
      </div>

      <div className="section py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <Card className="card-signup">
                <CardHeader className="text-center pb-0">
                  <h4 className="h3 card-title mb-2">Create Account</h4>
                  <p className="text-muted" style={{ fontSize: "18px" }}>
                    Your request will be reviewed and approved by the admin.
                  </p>
                </CardHeader>

                <CardBody>
                  {apiMsg.text && (
                    <Alert color={apiMsg.type} className="text-center">
                      {apiMsg.text}
                      {apiMsg.type === "success" && (
                        <div className="mt-2">
                          <small>Redirecting to home page...</small>
                        </div>
                      )}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit} noValidate>

                    {/* Full Name */}
                    <FormGroup className={fieldState("full_name")}>
                      <Label>Full Name <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="full_name"
                          placeholder="Your full name"
                          value={form.full_name}
                          onChange={handleChange}
                          invalid={!!errors.full_name}
                          valid={!errors.full_name && !!form.full_name}
                        />
                        <FormFeedback>{errors.full_name}</FormFeedback>
                      </InputGroup>
                    </FormGroup>

                    {/* Gotram */}
                    <FormGroup className={fieldState("gotram")}>
                      <Label>Gotram <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons education_hat" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input                          
                          name="gotram"
                          placeholder="Your Gotram"
                          value={form.gotram}
                          onChange={handleChange}
                          invalid={!!errors.gotram}
                          valid={!errors.gotram && !!form.gotram}
                        />                                                  
                        <FormFeedback>{errors.gotram}</FormFeedback>
                      </InputGroup>
                    </FormGroup>

                    {/* Phone */}
                    <FormGroup className={fieldState("phone")}>
                      <Label>Phone Number <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons tech_mobile" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+91XXXXXXXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          invalid={!!errors.phone}
                          valid={!errors.phone && !!form.phone}
                        />
                        <FormFeedback>{errors.phone}</FormFeedback>
                      </InputGroup>
                    </FormGroup>

                    {/* Email */}
                    <FormGroup className={fieldState("email")}>
                      <Label>Email Address <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          invalid={!!errors.email}
                          valid={!errors.email && !!form.email}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                      </InputGroup>
                    </FormGroup>                    

                    {/* Password */}
                    <FormGroup className={fieldState("password")}>
                      <Label>Password <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type={showPass ? "text" : "password"}
                          name="password"
                          placeholder="Min 8 chars, 1 uppercase, 1 number"
                          value={form.password}
                          onChange={handleChange}
                          invalid={!!errors.password}
                          valid={!errors.password && !!form.password}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPass(!showPass)}
                          >
                            <i className={`now-ui-icons ${showPass ? "design_bullet-list-67" : "design_bullet-list-67"}`} />
                          </InputGroupText>
                        </InputGroupAddon>
                        <FormFeedback>{errors.password}</FormFeedback>
                      </InputGroup>
                    </FormGroup>

                    {/* Confirm Password */}
                    <FormGroup className={fieldState("confirm_password")}>
                      <Label>Confirm Password <span className="text-danger">*</span></Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type={showPass ? "text" : "password"}
                          name="confirm_password"
                          placeholder="Re-enter password"
                          value={form.confirm_password}
                          onChange={handleChange}
                          invalid={!!errors.confirm_password}
                          valid={!errors.confirm_password && !!form.confirm_password}
                        />
                        <FormFeedback>{errors.confirm_password}</FormFeedback>
                      </InputGroup>
                    </FormGroup>

                    <Button
                      block color="info" type="submit"
                      disabled={loading} className="h3 mt-3"
                    >
                      {loading
                        ? <><span className="spinner-border spinner-border-sm mr-2" />Submitting...</>
                        : "Register Now"
                      }
                    </Button>

                    <div className="text-center mt-3">
                      <large className="text-muted">
                        Already have an account?{" "}
                        <Link to="/loginPage" className="text-info font-weight-bold">
                          Sign In
                        </Link>
                      </large>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <FooterBlack />
    </>
  );
}

export default SignupPage;