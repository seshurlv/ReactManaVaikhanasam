import React from "react";
import { useHistory, Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  Alert
} from "reactstrap";

import { useAuth } from "context/AuthContext";
import { userLogin, adminLogin } from "services/authService";

// ManaVaikhanasam specific login component
function LoginPage() {
  const history = useHistory();
  const { login } = useAuth();

  // "user" or "admin" tab
  const [loginType, setLoginType] = React.useState("user");

  // form fields
  const [mobile, setMobile] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // UI state
  const [mobileFocus, setMobileFocus] = React.useState(false);
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // Clear error when switching tabs or editing fields
  React.useEffect(() => { setError(""); }, [loginType, mobile, username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let result;
      if (loginType === "user") {
        if (!mobile.trim() || !password) {
          setError("Mobile number and password are required.");
          setLoading(false);
          return;
        }
        result = await userLogin(mobile.trim(), password);
      } else {
        if (!username.trim() || !password) {
          setError("Username and password are required.");
          setLoading(false);
          return;
        }
        result = await adminLogin(username.trim(), password);
      }

      if (!result.success) {
        setError(result.message || "Login failed. Please try again.");
        setLoading(false);
        return;
      }

      // Decode token payload and persist in context
      const tokenPayload = JSON.parse(atob(result.data.token));
      login({ ...tokenPayload, token: result.data.token });

      history.replace("/");
    } catch {
      setError("Unable to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
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

      <div className="page-header header-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <Form className="form" onSubmit={handleSubmit}>
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          alt="Mana Vaikhanasam"
                          src={require("assets/img/now-logo.png")}
                        />
                      </div>
                      {/* Login type toggle */}
                      <div style={{ marginTop: "12px", display: "flex", justifyContent: "center", gap: "8px" }}>
                        <Button
                          size="sm"
                          className="btn-round"
                          color={loginType === "user" ? "info" : "default"}
                          outline={loginType !== "user"}
                          onClick={() => setLoginType("user")}
                          type="button"
                        >
                          <i className="now-ui-icons users_circle-08" /> Member Login
                        </Button>
                        <Button
                          size="sm"
                          className="btn-round"
                          color={loginType === "admin" ? "danger" : "default"}
                          outline={loginType !== "admin"}
                          onClick={() => setLoginType("admin")}
                          type="button"
                        >
                          <i className="now-ui-icons ui-1_settings-gear-63" /> Admin Login
                        </Button>
                      </div>
                    </CardHeader>

                    <CardBody>
                      {error && (
                        <Alert color="danger" style={{ fontSize: "0.85rem", padding: "8px 14px" }}>
                          {error}
                        </Alert>
                      )}

                      {loginType === "user" ? (
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (mobileFocus ? " input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons tech_mobile"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Mobile Number..."
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            onFocus={() => setMobileFocus(true)}
                            onBlur={() => setMobileFocus(false)}
                          />
                        </InputGroup>
                      ) : (
                        <InputGroup
                          className={
                            "no-border input-lg" +
                            (usernameFocus ? " input-group-focus" : "")
                          }
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons users_circle-08"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Admin Username..."
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setUsernameFocus(true)}
                            onBlur={() => setUsernameFocus(false)}
                          />
                        </InputGroup>
                      )}

                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (passwordFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password..."
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setPasswordFocus(true)}
                          onBlur={() => setPasswordFocus(false)}
                        />
                      </InputGroup>
                    </CardBody>

                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color={loginType === "admin" ? "danger" : "info"}
                        type="submit"
                        size="lg"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </Button>
                    </CardFooter>

                    <br />
                    {loginType === "user" && (
                      <div className="pull-left">
                        <h6>
                          <Link to="/signupPage" className="text-info font-weight-bold">
                            Create Account
                          </Link>
                        </h6>
                      </div>
                    )}
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
