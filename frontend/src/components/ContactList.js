import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

function ContactList() {
  const { data, isLoading, error } = useFetch(
    "http://localhost:6001/api/v1/contacts"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error....</p>;
  }

  return (
    <div className="contact-list">
      <div className="contact-list-container">
        {data.map((user) => {
          const { name, _id: id } = user;
          return (
            <Link to={`/contacts/${id}`} key={id}>
              <Contact name={name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ContactList;
