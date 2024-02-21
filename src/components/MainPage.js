import React from "react";
import NavBarComponent from "./NavBar";
import CardComponent from "../Utils/Card";
import user from "../assets/icons/user.svg";

const MainPage = () => {
  const buttonParams = {
    buttonName: "Click Here",
    color: "blue",
    iconParams:{
      iconPosition : "right",
      iconImg : user
    }
  };

  const cardParams = {
    title: "Hello There!",
    text: "Welcome",
    cardColor: "yellow",
    width: "25rem",
  };

  return (
    <div className="main-container d-flex flex-column align-items-center w-100">
      <NavBarComponent />
      <CardComponent
        cardParams={cardParams}
        buttonParams={buttonParams}
      />
    </div>
  );
};

export default MainPage;
