import React from "react";
import ContactList from "../components/ContactList";
import Groups from "../components/Groups";
import Header from "../layout/Header";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="container">
          <Header />
          <Groups />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default Home;
