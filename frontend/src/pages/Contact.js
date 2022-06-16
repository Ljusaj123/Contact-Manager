import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import ErrorPage from "./ErrorPage.js";
import "react-spinner-animated/dist/index.css";
import { HalfMalf } from "react-spinner-animated";

function Contact() {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    error,
  } = useFetch(`http://localhost:6001/api/v1/contacts/${id}`);
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

  const { name, email, number, address, tag } = user;

  return (
    <div className="contact-page">
      {/* {console.log(user)} */}
      <div className="contact-page-container">
        <div className="container">
          <h1>Contact Info</h1>
          <div className="image-name-container ">
            <FaUserCircle className="user-info-icon" />
            <h2>{name}</h2>
          </div>

          <div className="email">
            <h3>Email:</h3>
            <div className="number-paragraphs">
              {(email || []).map((mail, index) => {
                return <p key={index}>{mail}</p>;
              })}
            </div>
          </div>
          <div className="number">
            <h3>Number:</h3>
            <div className="number-paragraphs">
              {(number || []).map((numb, index) => {
                return <p key={index}>{numb}</p>;
              })}
            </div>
          </div>
          <div className="address">
            <h3>Address:</h3>
            <p>{address}</p>
          </div>
          <div className="tag">
            <h3>Tag:</h3>
            <p>{tag ? tag : "No tag"}</p>
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
