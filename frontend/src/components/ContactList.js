import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { niz } from "../niz.js";

function ContactList() {
  return (
    <div className="contact-list">
      <div className="contact-list-container">
        {niz.map((user) => {
          return (
            <Link to={`/contact/${user.id}`} key={user.id}>
              <Contact props={user} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;
