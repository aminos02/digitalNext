import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function Modal({ show, onClose, children, title }) {
    const [isBrowser, setIsBrowser] = useState(false);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
      };

    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const modalContent =  (
        <StyledModalOverlay >
          <StyledModal>
            <StyledModalHeader>
              <a href="#" onClick={handleCloseClick}>
                x
              </a>
            </StyledModalHeader>
            {title && <StyledModalTitle>{title}</StyledModalTitle>}
            <StyledModalBody>{children}</StyledModalBody>
          </StyledModal>
        </StyledModalOverlay>)
      

      if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      } 
  
}
const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: black;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  z-index:3;
  width: 800px;
  height: 800px;
  background-color: red;
`;

export default Modal;