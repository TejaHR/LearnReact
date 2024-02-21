import React from "react";
import ButtonComponent  from "./Button";
import Card from "react-bootstrap/Card";
import wallaper from "../assets/images/wallapaper.jpg";

const CardComponent = ({
  cardParams={},
  buttonParams = {},
}) => {
  return (
    <div className="card-container mt-2">
      <Card style={{ width: cardParams?.width, color: cardParams?.cardColor }}>
        <Card.Img variant="top" src={wallaper} />
        <Card.Body className="d-flex justify-content-center">
          <Card.Title>{cardParams?.cardTitle}</Card.Title>
          <Card.Text>{cardParams?.cardText}</Card.Text>
          <ButtonComponent buttonParams={buttonParams}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
