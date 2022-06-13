import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

function Contact() {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    error,
  } = useFetch(`http://localhost:6001/api/v1/contacts/${id}`);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error....</p>;
  }

  const { name, email, number, address, tag } = user;

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="container">
          <h1>Contact Info</h1>
          <div className="image-name-container">
            <FaUserCircle className="user-info-icon" />
            <h2>{name}</h2>
          </div>
          <div className="number-email-container">
            <div className="email-container">
              <h3>Email:</h3>
              <p>{email}</p>
            </div>
            <div className="number-container">
              <h3>Number:</h3>
              <p>{number}</p>
            </div>
          </div>
          <div className="rest-info">
            <div className="address-container">
              <h3>Address:</h3>
              <p>{address}</p>
            </div>
            <div className="tag-container">
              <h3>Tag:</h3>
              <p>{tag ? tag : "No tag"}</p>
            </div>
          </div>
          <div className="button-container">
            <AiOutlineDelete className="button-icon" />
            <MdFavoriteBorder className="button-icon" />
            <BsPencil className="button-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
