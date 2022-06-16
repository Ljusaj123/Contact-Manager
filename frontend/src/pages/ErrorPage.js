import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

function ErrorPage({ error }) {
  const message = error.response.data.msg;
  const status = error.response.status;
  const statusText = error.response.statusText;
  return (
    <div className="error-page">
      <div className="error-page-container">
        <BiError className="error-icon" />
        <h1>
          Error {status} - {statusText}
        </h1>
        <h3>{message}</h3>
        <Link to="/">
          <button className="back-btn">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
