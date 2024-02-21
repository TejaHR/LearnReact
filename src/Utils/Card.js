import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import wallaper from "../assets/images/wallapaper.jpg";

const CardComponent = ({
  cardParams={},
  buttonStyling = {},
  iconParams = {}
}) => {
  return (
    <div className="card-container mt-2">
      <Card style={{ width: cardParams?.width, color: cardParams?.cardColor }}>
        <Card.Img variant="top" src={wallaper} />
        <Card.Body className="d-flex justify-content-center">
          <Card.Title>{cardParams?.cardTitle}</Card.Title>
          <Card.Text>{cardParams?.cardText}</Card.Text>
          {iconParams ? (
            <Button style={{ color: buttonStyling?.color }}>
              {buttonStyling?.buttonName}
            </Button>
          ) : (
            <Button style={{ color: buttonStyling?.color }}>
              {buttonStyling?.buttonName}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
