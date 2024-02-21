import React from "react";
import { Button } from "react-bootstrap";


const ButtonComponent = ({
    buttonParams = {}
}) => {
  return (
    <div className="button-container">
      {buttonParams?.iconParams ? (
            <Button style={{ color: buttonParams?.color }}>
              <img inline src={buttonParams?.iconParams?.iconImg}/> {buttonParams?.buttonName}
            </Button>
          ) : (
            <Button style={{ color: buttonParams?.color }}>
              {buttonParams?.buttonName}
            </Button>
          )}
    </div>
  );
};

export default ButtonComponent;
