import config from "../config";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../scss/_account.scss";

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // alert("Please login first");
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get(`${config.API_URL}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
        alert("Unauthorized or token expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="account-page">
      <h1>Account</h1>
      <h2>{user.fullName}</h2>
      <div className="profile-details">
        <h3>Profile Details</h3>
        <table>
          <tbody>
            <tr><td>Full Name</td><td>{user.fullName}</td></tr>
            <tr><td>Mobile Number</td><td>{user.mobile}</td></tr>
            <tr><td>Email ID</td><td>{user.email}</td></tr>
            <tr><td>Gender</td><td>{user.gender}</td></tr>
            <tr><td>Date of Birth</td><td>{user.dob || "- not added -"}</td></tr>
            <tr><td>Location</td><td>{user.location || "- not added -"}</td></tr>
            <tr><td>Alternate Mobile</td><td>{user.altMobile || "- not added -"}</td></tr>
            <tr><td>Hint Name</td><td>{user.hintName || "- not added -"}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
