import React, { useState, useEffect } from "react";
import NavBarComponent from "./NavBar";
import CardComponent from "../Utils/Card";
import user from "../assets/icons/user.svg";
import ProfileCardComp from "../Utils/ProfileCard";
import friend from "../assets/images/friend.png"
import SliderComponent from "../Utils/Slider";
import axios from 'axios';
import VedioPlayerComp from "../Utils/Vedio";

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
    cardTitle: "Hello There!",
    cardText: "Welcome",
    cardColor: "yellow",
    width: "25rem",
  };

  const profileParams = {
    "image": friend
  }

  const vedioParams={
    url:"https://www.youtube.com/watch?v=LXb3EKWsInQ"
  }

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
      .then(response => {
        setPhotos(response.data.photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

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
