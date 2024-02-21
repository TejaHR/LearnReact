import React from "react";
import CardComponent from "./Card.js";

const ProfileCardComp = ({ profileParams = {}, cardParams={} }) => {
//   const cardParams = {
//     cardTitle: "Hey, I'm",
//     cardText: "Welcome",
//     cardColor: "yellow",
//     width: "25rem",
//     image: ""
//   };
  return (
    <div className="profilecard-container flex-row-justify-between">
      <div>
        <img className="rounded-circle" inline src={profileParams?.image} />
      </div>
      <div className="flex-row-align-center">
        <CardComponent cardParams={cardParams}/>
      </div>
    </div>
  );
};

export default ProfileCardComp;
