import React from "react";
import ButtonComponent  from "./Button";
import Card from "react-bootstrap/Card";
import wallaper from "../assets/images/wallapaper.jpg";
import _ from "lodash"

const CardComponent = ({
  cardParams={},
  buttonParams = {},
}) => {
  return (
    <div className="card-container mt-2">
      <Card style={{ color: cardParams?.cardColor}}>
        <Card.Img variant="top" src={cardParams?.image} />
        <Card.Body>
          <Card.Title>{cardParams?.cardTitle}</Card.Title>
          <Card.Text>{cardParams?.cardText}</Card.Text>
          {!_.isEmpty(buttonParams) && <ButtonComponent buttonParams={buttonParams}/>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
