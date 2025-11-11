/**
 * ManaVaikhanasam Community Portal - Devotee Registration Page
 * 
 * This component handles new devotee registration for the Vaikhanasa community portal,
 * collecting essential information for community membership and services.
 * 
 * Features:
 * - Comprehensive registration form
 * - Vaikhanasa-specific fields (Gotram, etc.)
 * - Form validation and reset functionality
 * - Community-specific branding
 * - Sanskrit/Hindi text integration
 * - Responsive design for temple usage
 * 
 * @author ManaVaikhanasam Development Team
 * @version 1.5.1
 * @created 2025
 */

import React from "react";
import { useHistory } from "react-router-dom";

// Custom ManaVaikhanasam styles
import "assets/css/mana-vaikhanasa-custom.css";

// reactstrap components
import {
  Button,
  Card,
  //CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  FormFeedback
} from "reactstrap";
//import { use } from "react";

function SignupPage() {  
  const history = useHistory();
  
  // Form state management
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
    surname: '',
    firstName: '',
    lastName: '',
    gotram: '',
    mobile: '',
    email: '',
    address: '',
    agreeTerms: false
  });

  // const [usernameFocus, setUsernameFocus] = React.useState(false);
  // const [passwordFocus, setPasswordFocus] = React.useState(false);
  // const [fullnameFocus, setFullnameFocus] = React.useState(false);
  // const [gotramFocus, setGotramFocus] = React.useState(false);
  // const [mobileFocus, setMobileFocus] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  // const [addressFocus, setAddressFocus] = React.useState(false);
   const [mobile, setMobile] = React.useState("");

  // Focus states for input styling
  const [focusStates, setFocusStates] = React.useState({
    username: false,
    password: false,
    confirmPassword: false,
    surname: false,
    firstName: false,
    lastName: false,
    gotram: false,
    mobile: false,
    email: false,
    address: false
  });

  // Validation errors state
  const [errors, setErrors] = React.useState({});

  // Validation touched state (to show errors only after user interaction)
  const [touched, setTouched] = React.useState({});
  

  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // Validation functions
  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'username':
        if (!value.trim()) {
          error = 'Username is required';
        } else if (value.length < 3) {
          error = 'Username must be at least 3 characters';
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          error = 'Username can only contain letters, numbers, and underscores';
        }
        break;
        
      case 'password':
        if (!value.trim()) {
          error = 'Password is required';
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }
        break;
        
      case 'confirmPassword':
        if (!value.trim()) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
        
      case 'surname':
        if (!value.trim()) {
          error = 'Surname is required';
        } else if (value.length < 2) {
          error = 'Surname must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Surname can only contain letters and spaces';
        }
        break;
        
      case 'firstName':
        if (!value.trim()) {
          error = 'First name is required';
        } else if (value.length < 2) {
          error = 'First name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'First name can only contain letters and spaces';
        }
        break;
        
      case 'lastName':
        if (!value.trim()) {
          error = 'Last name is required';
        } else if (value.length < 2) {
          error = 'Last name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Last name can only contain letters and spaces';
        }
        break;
        
      case 'gotram':
        if (!value.trim()) {
          error = 'Gotram is required for Vaikhanasa community registration';
        } else if (value.length < 3) {
          error = 'Gotram must be at least 3 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Gotram can only contain letters and spaces';
        }
        break;
        
      case 'mobile':
        if (!value.trim()) {
          error = 'Mobile number is required';
        } else if (!/^[6-9]\d{9}$/.test(value)) {
          error = 'Please enter a valid 10-digit Indian mobile number';
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
        
      case 'address':
        if (!value.trim()) {
          error = 'Address is required';
        } else if (value.length < 10) {
          error = 'Please provide a complete address (at least 10 characters)';
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Validate field and update errors
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  // Handle focus states
  const handleFocus = (field) => {
    setFocusStates(prev => ({
      ...prev,
      [field]: true
    }));
  };

  // Handle blur states (when user leaves field)
  const handleBlur = (field) => {
    setFocusStates(prev => ({
      ...prev,
      [field]: false
    }));
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    
    // Validate field
    const error = validateField(field, formData[field]);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    const requiredFields = [
      'username', 'password', 'confirmPassword', 'surname', 'firstName', 
      'lastName', 'gotram', 'mobile', 'email', 'address'
    ];
    
    // Check if all required fields have values
    const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');
    
    // Check if there are no validation errors
    const noErrors = requiredFields.every(field => !validateField(field, formData[field]));
    
    // Check if terms are agreed
    const termsAgreed = formData.agreeTerms;
    
    return allFieldsFilled && noErrors && termsAgreed;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isFormValid()) {
      console.log('Form submitted with data:', formData);
      // Add actual registration API call here
      alert('Registration successful! Welcome to Mana Vaikhanasam community.');
      // You can redirect to login page or dashboard after successful registration
      // history.push('/login-page');
    } else {
      alert('Please fill all fields correctly before submitting.');
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      confirmPassword: '',
      surname: '',
      firstName: '',
      lastName: '',
      gotram: '',
      mobile: '',
      email: '',
      address: '',
      agreeTerms: false
    });
    setErrors({});
    setTouched({});
  };

  const handleMobileChange = (e) => {
    // Remove all non-digit characters
    const value = e.target.value.replace(/\D/g, '');
    // Limit length to 10 digits
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  return (
    <>      
      {/* Back Arrow Button */}
      <Button
        className="btn-icon btn-neutral back-arrow-btn"
        color="default"
        size="sm"
        onClick={() => history.goBack()}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: "1050",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <i className="now-ui-icons arrows-1_minimal-left" style={{ fontSize: "16px", color: "#333" }}></i>
      </Button>  

      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg18.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="mr-auto" md="8" lg="12">
                <Card className="card-signup">
                  <CardBody>
                    <CardTitle className="text-center mb-4" tag="h4">                      
                      <p className="text-muted mt-2" style={{ fontSize: '14px' }}>
                        Register for ManaVaikhanasam Community Portal
                      </p>
                    </CardTitle>       


                    <Form onSubmit={handleSubmit} className="form">  
                      <Row>
                        {/* Password */}
                        <Col md="6">
                          <InputGroup className={focusStates.password ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_lock-circle-open"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Password..."
                              type="password"
                              value={formData.password}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              onFocus={() => handleFocus('password')}
                              onBlur={() => handleBlur('password')}
                              invalid={touched.password && !!errors.password}
                            />
                            {touched.password && errors.password && (
                              <FormFeedback>{errors.password}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* Confirm Password */}
                        <Col md="6">
                          <InputGroup className={focusStates.confirmPassword ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_check"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Confirm Password..."
                              type="password"
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                              onFocus={() => handleFocus('confirmPassword')}
                              onBlur={() => handleBlur('confirmPassword')}
                              invalid={touched.confirmPassword && !!errors.confirmPassword}
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                              <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* Surname */}
                        <Col md="4">
                          <InputGroup className={focusStates.surname ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons business_badge"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Surname..."
                              type="text"
                              value={formData.surname}
                              onChange={(e) => handleInputChange('surname', e.target.value)}
                              onFocus={() => handleFocus('surname')}
                              onBlur={() => handleBlur('surname')}
                              invalid={touched.surname && !!errors.surname}
                            />
                            {touched.surname && errors.surname && (
                              <FormFeedback>{errors.surname}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* First Name */}
                        <Col md="4">
                          <InputGroup className={focusStates.firstName ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_single-02"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="First Name..."
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              onFocus={() => handleFocus('firstName')}
                              onBlur={() => handleBlur('firstName')}
                              invalid={touched.firstName && !!errors.firstName}
                            />
                            {touched.firstName && errors.firstName && (
                              <FormFeedback>{errors.firstName}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col> 
                        {/* Gotram */}
                        <Col md="6">
                          <InputGroup className={focusStates.gotram ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons education_hat"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Gotram (गोत्रम्)..."
                              type="text"
                              value={formData.gotram}
                              onChange={(e) => handleInputChange('gotram', e.target.value)}
                              onFocus={() => handleFocus('gotram')}
                              onBlur={() => handleBlur('gotram')}
                              invalid={touched.gotram && !!errors.gotram}
                            />
                            {touched.gotram && errors.gotram && (
                              <FormFeedback>{errors.gotram}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* Mobile Number */}
                        <Col md="6">
                          <InputGroup className={focusStates.mobile ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons tech_mobile"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Mobile Number..."
                              type="tel"
                              value={formData.mobile}
                              onChange={(e) => {
                                // Allow only digits and limit to 10 characters
                                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                handleInputChange('mobile', value);
                              }}
                              onFocus={() => handleFocus('mobile')}
                              onBlur={() => handleBlur('mobile')}
                              invalid={touched.mobile && !!errors.mobile}
                              maxLength="10"
                            />
                            {touched.mobile && errors.mobile && (
                              <FormFeedback>{errors.mobile}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* Email */}
                        <Col md="12">
                          <InputGroup className={focusStates.email ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Email Address..."
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              onFocus={() => handleFocus('email')}
                              onBlur={() => handleBlur('email')}
                              invalid={touched.email && !!errors.email}
                            />
                            {touched.email && errors.email && (
                              <FormFeedback>{errors.email}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>

                        {/* Address */}
                        <Col md="12">
                          <InputGroup className={focusStates.address ? "input-group-focus" : ""}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons location_pin"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                              placeholder="Residence Address..."
                              type="textarea"
                              rows="3"
                              value={formData.address}
                              onChange={(e) => handleInputChange('address', e.target.value)}
                              onFocus={() => handleFocus('address')}
                              onBlur={() => handleBlur('address')}
                              invalid={touched.address && !!errors.address}
                            />
                            {touched.address && errors.address && (
                              <FormFeedback>{errors.address}</FormFeedback>
                            )}
                          </InputGroup>
                        </Col>
                      </Row>                
                                                                 
                      <FormGroup check className="text-left mt-3">
                        <Label check>
                          <Input type="checkbox" checked={formData.agree} onChange={(e) => handleInputChange('agree', e.target.checked)}></Input>
                          <span className="form-check-sign"></span>
                          I agree to the terms and{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            conditions
                          </a>
                          .
                        </Label>
                      </FormGroup>

                      {/* Action Buttons */}
                      <CardFooter className="text-center">
                        <Row>
                          <Col md="6">
                            <Button
                              className="btn-round"
                              color="info"
                              type="submit"
                              size="lg"
                              disabled={!isFormValid()}
                              style={{
                                opacity: isFormValid() ? 1 : 0.6,
                                cursor: isFormValid() ? 'pointer' : 'not-allowed'
                              }}
                            >
                              <i className="now-ui-icons ui-1_check mr-2"></i>
                              पंजीकरण करें (Register)
                            </Button>
                            </Col>
                          <Col md="6">
                            <Button
                              className="btn-round"
                              color="default"
                              type="button"
                              size="lg"
                              onClick={handleReset}
                            >
                              <i className="now-ui-icons arrows-1_refresh-69 mr-2"></i>
                              रीसेट करें (Reset)
                            </Button>
                          </Col>
                        </Row>
                        <div className="text-center mt-3">
                          <small className="text-muted">
                            Already have an account?{" "}
                            <a href="/login-page" className="text-info">
                              लॉगिन करें (Login)
                            </a>
                          </small>
                        </div>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>        
      </div>
    </>
  );
}

export default SignupPage;
