import React from "react";
import { Button } from "react-bootstrap";

const IconButtonComponent = ({ buttonParams = {} }) => {
  const { iconPosition = "left" } = buttonParams;
  return (
    <div className="iconbutton-container">
      {iconPosition === "right" ? (
        <Button style={{ color: buttonParams?.color }}>
          <div className="flex-row-justify-between">
            <div className="flex-row-align-center">
              <img inline src={buttonParams?.iconParams?.iconImg} />
            </div>
            <div className="ms-sm-2 ms-md-3 ms-lg-4 ms-xl-4 button-text">{buttonParams?.buttonName}</div>
          </div>
        </Button>
      ) : (
        <Button style={{ color: buttonParams?.color }}>
          <div className="flex-row-justify-between">
            <div className="button-text">{buttonParams?.buttonName}</div>
            <div className="ms-sm-2 ms-md-3 ms-lg-4 ms-xl-4 flex-row-align-center">
              <img inline src={buttonParams?.iconParams?.iconImg} />
            </div>
          </div>
        </Button>
      )}
    </div>
  );
};

const ButtonComponent = ({ buttonParams = {} }) => {
  return (
    <div className="button-container">
      {buttonParams?.iconParams ? (
        <IconButtonComponent buttonParams={buttonParams} />
      ) : (
        <Button style={{ color: buttonParams?.color }}>
          {buttonParams?.buttonName}
        </Button>
      )}
    </div>
  );
};

export default ButtonComponent;
