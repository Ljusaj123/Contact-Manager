import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error-page">
      <div className="error-page-container">
        <h1>Error 404 - Page not found</h1>
        <h3>The page you requested does not exist</h3>
        <Link to="/">
          <button className="back-btn">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
