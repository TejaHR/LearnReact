import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PopUpCard = ({
  show,
  popUpCardParams = {},
  displayModal = () => {},
  closeIcon,
}) => {

    const handleModalShow = (value) => {
        displayModal(value)
    }
  return (
    <div>
      <Button variant="primary" onClick={()=>handleModalShow(true)}>
        Click on this for PopUp
      </Button>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="w-100">
            <div className="d-flex justify-content-between">
              <div>{popUpCardParams.titleOfPopUp}</div>
              <div>
                <img inline src={closeIcon} onClick={() => handleModalShow(false)}/>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{popUpCardParams.popUpBody}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopUpCard;
