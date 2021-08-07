import React, { useState } from "react";
import Styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

// const ModalContainerStyled = Styled.div`
// position: fixed;
// top: 0;
// right: 0;
// bottom: 0;
// left:0;
// margin: auto;
// width: 100%;
// max-width: 500px;
// z-index: 999;
// background-color: rgba(0,0,0,0.8);
// color: #fff;
// font-size: 20px;
// `;

function ModalBox({ children, title, handleClose, show }) {
  return (
    <Modal animation={true} size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBox;
