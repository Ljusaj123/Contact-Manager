import React from "react";
import Contact from "./Contact";
function ContactList() {
  return (
    <div className="contact-list">
      <div className="contact-list-container">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default ContactList;
