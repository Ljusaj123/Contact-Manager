import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { niz } from "../niz.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Contact() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const us = niz.find((a) => a.id === id);
    setUser([us]);
  }, [id]);

  return (
    <div className="contact-page">
      {console.log(user)}
      <div className="contact-page-container">
        <div className="container">
          <h1>Contact Info</h1>
          <div className="image-name-container">
            <FaUserCircle className="user-info-icon" />
            <h2>{user.name}</h2>
          </div>
          <div className="number-email-container">
            <div className="email-container">
              <h3>Email:</h3>
              {user.map((us) => {
                return (
                  <div className="emails">
                    {us.email.map((u, index) => {
                      return <p key={index}>{u}</p>;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="number-container">
              <h3>Number:</h3>
              {user.map((us) => {
                return (
                  <div className="numbers">
                    {us.number.map((u, index) => {
                      return <p key={index}>{u}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rest-info">
            <div className="address-container">
              <h3>Address:</h3>
              {user.map((us, index) => {
                return <p key={index}>{us.address}</p>;
              })}
            </div>
            <div className="tag-container">
              <h3>Tag:</h3>
              {user.map((us, index) => {
                return <p key={index}>{us.tag}</p>;
              })}
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
