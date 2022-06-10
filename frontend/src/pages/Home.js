import React from "react";
import ContactList from "../components/ContactList";
import Header from "../layout/Header";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <Header />
        <ContactList />
      </div>
    </div>
  );
}

export default Home;
