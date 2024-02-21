import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBarComponent() {
  return (
    <div className="navbar-container w-100">
      <Navbar className="bg-body-tertiary w-100">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
            {/* <img
              alt="get image dynamically"
              src={""}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            Add Names dynamically
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
