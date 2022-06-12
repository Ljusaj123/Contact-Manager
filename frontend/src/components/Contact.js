import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Contact({ props }) {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="img-container">
          <FaUserCircle className="user-icon" />
        </div>
        <p className="contact-name">{props.name}</p>
      </div>
    </div>
  );
}

export default Contact;
