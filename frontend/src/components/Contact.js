import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Contact({ name }) {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="img-container">
          <FaUserCircle className="user-icon" />
        </div>
        <p className="contact-name">{name}</p>
      </div>
    </div>
  );
}

export default Contact;
