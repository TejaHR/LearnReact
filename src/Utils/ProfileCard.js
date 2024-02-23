import React from "react";
import CardComponent from "./Card.js";
import "../styling/card/card.scss"

const ProfileCardComp = ({ profileParams = {}, cardParams={} }) => {
//   const cardParams = {
//     cardTitle: "Hey, I'm",
//     cardText: "Welcome",
//     cardColor: "yellow",
//     width: "25rem",
//     image: ""
//   };
  return (
    <div className="profilecard-container">
      <div className="flex-row-justify-center">
        <img className="rounded-circle profile-card-img" inline src={profileParams?.image} />
      </div>
      <div className="flex-row-align-center">
        <CardComponent cardParams={cardParams}/>
      </div>
    </div>
  );
};

export default ProfileCardComp;
