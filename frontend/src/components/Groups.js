import React from "react";
import { BiStar, BiGroup, BiUser } from "react-icons/bi";

function Groups() {
  return (
    <div className="groups">
      <div className="groups-container">
        <BiUser className="button-icon" />
        <BiStar className="button-icon" />
        <BiGroup className="button-icon" />
      </div>
    </div>
  );
}

export default Groups;
