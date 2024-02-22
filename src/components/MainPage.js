import React from "react";
import NavBarComponent from "./NavBar";
import CardComponent from "../Utils/Card";
import user from "../assets/icons/user.svg";
import ProfileCardComp from "../Utils/ProfileCard";
import friend from "../assets/images/friend.png";

const MainPage = () => {
  const buttonParams = {
    buttonName: "Click Here",
    color: "blue",
    iconParams: {
      iconPosition: "right",
      iconImg: user,
    },
  };

  const cardParams = {
    cardTitle: "Hello There!",
    cardText: "Welcome",
    cardColor: "yellow",
    width: "25rem",
  };

  const profileParams = {
    image: friend,
  };
  return (
    <div className="main-container d-flex flex-column align-items-center w-100">
      <NavBarComponent />
      {/* <CardComponent
        cardParams={cardParams}
        buttonParams={buttonParams}
      /> */}
      <div className="m-3">
        <ProfileCardComp
          profileParams={profileParams}
          cardParams={cardParams}
        />
      </div>
    </div>
  );
};

export default MainPage;
