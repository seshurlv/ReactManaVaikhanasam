import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Table,
  Button,
  Badge,
  Alert,
  Spinner,
  Input,
  Row,
  Col,
} from "reactstrap";

import { useAuth } from "context/AuthContext";
import { getPendingUsers, approveUser, rejectUser } from "services/authService";

function PendingUsersPage() {
  const history = useHistory();
  const { isAdmin, auth } = useAuth();

  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [successMsg, setSuccessMsg] = React.useState("");

  // Track which user's reject input is open and the reason text
  const [rejectingId, setRejectingId] = React.useState(null);
  const [rejectReason, setRejectReason] = React.useState("");
  const [actionLoading, setActionLoading] = React.useState(false);

  // Redirect non-admins
  React.useEffect(() => {
    if (!isAdmin) {
      history.replace("/loginPage");
    }
  }, [isAdmin, history]);

  // Page chrome
  React.useEffect(() => {
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // Load pending users
  const loadUsers = React.useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getPendingUsers(auth.token);
      if (res.success) {
        setUsers(res.data.users);
      } else {
        setError(res.message || "Failed to load pending users.");
      }
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }, [auth]);

  React.useEffect(() => {
    if (isAdmin) loadUsers();
  }, [isAdmin, loadUsers]);

  const handleApprove = async (userId) => {
    setActionLoading(true);
    setError("");
    setSuccessMsg("");
    try {
      const res = await approveUser(auth.token, userId);
      if (res.success) {
        setSuccessMsg("User approved successfully.");
        setUsers((prev) => prev.filter((u) => u.id !== userId));
      } else {
        setError(res.message || "Failed to approve user.");
      }
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleRejectSubmit = async (userId) => {
    if (!rejectReason.trim()) {
      setError("Please enter a rejection reason.");
      return;
    }
    setActionLoading(true);
    setError("");
    setSuccessMsg("");
    try {
      const res = await rejectUser(auth.token, userId, rejectReason.trim());
      if (res.success) {
        setSuccessMsg("User rejected.");
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        setRejectingId(null);
        setRejectReason("");
      } else {
        setError(res.message || "Failed to reject user.");
      }
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setActionLoading(false);
    }
  };

  if (!isAdmin) return null;

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Container fluid>
        {/* Header */}
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <Button
              color="secondary"
              size="sm"
              className="btn-round"
              onClick={() => history.goBack()}
            >
              <i className="now-ui-icons arrows-1_minimal-left" /> Back
            </Button>
          </Col>
          <Col>
            <h4 className="mb-0" style={{ color: "#333" }}>
              <i className="now-ui-icons ui-1_bell-53" style={{ marginRight: 8 }} />
              Pending User Approvals
              {!loading && (
                <Badge color="warning" pill style={{ marginLeft: 10, fontSize: "0.75rem" }}>
                  {users.length}
                </Badge>
              )}
            </h4>
          </Col>
          <Col xs="auto">
            <Button
              color="info"
              size="sm"
              className="btn-round"
              onClick={loadUsers}
              disabled={loading}
            >
              <i className="now-ui-icons arrows-1_refresh-69" /> Refresh
            </Button>
          </Col>
        </Row>

        {/* Alerts */}
        {error && (
          <Alert color="danger" toggle={() => setError("")}>
            {error}
          </Alert>
        )}
        {successMsg && (
          <Alert color="success" toggle={() => setSuccessMsg("")}>
            {successMsg}
          </Alert>
        )}

        {/* Loading */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner color="info" />
            <p className="mt-2 text-muted">Loading pending registrations...</p>
          </div>
        ) : users.length === 0 ? (
          <Alert color="info">
            <i className="now-ui-icons ui-1_check" /> No pending registrations at this time.
          </Alert>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <Table responsive hover style={{ backgroundColor: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <thead>
                <tr style={{ backgroundColor: "#04AA6D", color: "#fff" }}>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Gotram</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Registered On</th>
                  <th style={{ minWidth: 200 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <React.Fragment key={user.id}>
                    <tr>
                      <td>{idx + 1}</td>
                      <td><strong>{user.full_name}</strong></td>
                      <td>{user.gotram}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.address || "—"}</td>
                      <td style={{ whiteSpace: "nowrap" }}>
                        {new Date(user.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit", month: "short", year: "numeric"
                        })}
                      </td>
                      <td>
                        <Button
                          color="success"
                          size="sm"
                          className="btn-round mr-1"
                          disabled={actionLoading}
                          onClick={() => handleApprove(user.id)}
                        >
                          <i className="now-ui-icons ui-1_check" /> Approve
                        </Button>
                        <Button
                          color="danger"
                          size="sm"
                          className="btn-round"
                          disabled={actionLoading}
                          onClick={() => {
                            setRejectingId(rejectingId === user.id ? null : user.id);
                            setRejectReason("");
                            setError("");
                          }}
                        >
                          <i className="now-ui-icons ui-1_simple-remove" />{" "}
                          {rejectingId === user.id ? "Cancel" : "Reject"}
                        </Button>
                      </td>
                    </tr>
                    {/* Inline reject reason row */}
                    {rejectingId === user.id && (
                      <tr style={{ backgroundColor: "#fff3cd" }}>
                        <td colSpan={8}>
                          <Row className="align-items-center g-2" style={{ margin: 0 }}>
                            <Col>
                              <Input
                                type="text"
                                placeholder="Enter rejection reason..."
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") handleRejectSubmit(user.id);
                                }}
                                autoFocus
                              />
                            </Col>
                            <Col xs="auto">
                              <Button
                                color="danger"
                                size="sm"
                                className="btn-round"
                                disabled={actionLoading || !rejectReason.trim()}
                                onClick={() => handleRejectSubmit(user.id)}
                              >
                                {actionLoading ? <Spinner size="sm" /> : "Confirm Reject"}
                              </Button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </div>
  );
}

export default PendingUsersPage;
