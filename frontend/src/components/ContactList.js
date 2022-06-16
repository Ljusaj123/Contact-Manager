import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import "react-spinner-animated/dist/index.css";
import { HalfMalf } from "react-spinner-animated";
import ErrorPage from "../pages/ErrorPage.js";

function ContactList() {
  const { data, isLoading, error } = useFetch(
    "http://localhost:6001/api/v1/contacts"
  );

  if (isLoading) {
    return (
      <HalfMalf
        text={"Loading..."}
        bgColor={"#393e4b"}
        width={"150px"}
        height={"150px"}
      />
    );
  }

  if (error) {
    return <ErrorPage error={error} />;
  }
  if (!data.length) {
    return <h3>There are no contacts, make one!</h3>;
  }

  console.log(data);

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
