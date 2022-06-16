import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDoneAll } from "react-icons/md";

function SuccessPage({ message }) {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <MdOutlineDoneAll className="info-icon" />
        <h1>Success!</h1>
        <h3>{message}</h3>
        <Link to="/">
          <button className="back-btn">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
