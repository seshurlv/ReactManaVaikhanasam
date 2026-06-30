// PURPOSE: All authentication-related API calls to PHP backend
// Used by: SignupPage.js, LoginPage.js, AdminDashboard.js

const API_BASE = process.env.REACT_APP_API_URL || "/server/api";

// ---- Public API Calls ----

// User login (mobile + password)
export const userLogin = async (mobile, password) => {
  const response = await fetch(`${API_BASE}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile, password })
  });
  return response.json();
};

// Register a new user
export const registerUser = async (formData) => {
  const response = await fetch(`${API_BASE}/register.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });
  return response.json();
};

// ---- Admin API Calls ----

// Admin login
export const adminLogin = async (username, password) => {
  const response = await fetch(`${API_BASE}/admin/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return response.json();
};

// Get all pending users (requires token)
export const getPendingUsers = async (token) => {
  const response = await fetch(`${API_BASE}/admin/pending_users.php`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response.json();
};

// Approve a user (requires token)
export const approveUser = async (token, userId) => {
  const response = await fetch(`${API_BASE}/admin/approve.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId })
  });
  return response.json();
};

// Reject a user with reason (requires token)
export const rejectUser = async (token, userId, reason) => {
  const response = await fetch(`${API_BASE}/admin/reject.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ user_id: userId, reason })
  });
  return response.json();
};

// Get all users, optionally filtered by status: 'pending' | 'approved' | 'rejected'
export const getUsers = async (token, status = null) => {
  const url = status
    ? `${API_BASE}/admin/users.php?status=${encodeURIComponent(status)}`
    : `${API_BASE}/admin/users.php`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response.json();
};