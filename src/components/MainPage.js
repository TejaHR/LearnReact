import React from "react";
import NavBarComponent from "./NavBar";
import CardComponent from "../Utils/Card";

const MainPage = () => {
  const buttonStyling = {
    "buttonName": "Click Here",
    "color":"blue"
  }

  const cardParams = {
    "title":"Hello There!",
    "text":"Welcome",
    "cardColor":"yellow",
    "width": "25rem"
  }
  return (
    <div className="main-container d-flex flex-column align-items-center w-100">
      <NavBarComponent/>
      <CardComponent cardParams={cardParams} buttonStyling={buttonStyling} />
    </div>
  );
};

export default MainPage;
