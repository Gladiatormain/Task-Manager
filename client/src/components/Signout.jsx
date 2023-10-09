import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Signout({isuserAuthenticated}) {
    const navigate=useNavigate();
  const [show, setShow] = useState(true);
//   const handleClose = () => setShow(false);
  const handleClose=()=>{
    setShow(false);
    navigate('/')
  }
  const handleLogout=()=>{
    localStorage.removeItem('jwttoken');
    navigate('/login')
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure want to logout ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No!
          </Button>
          <Button variant="primary" onClick={handleLogout}>
           Yes!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signout;