import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

const NewFoodDialog = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
          Add food
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new food</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Search for foodname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="apple"
                  autoFocus
                />
               <Button variant="primary mt-3">Search</Button> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Add quantity in grams</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Results</Form.Label>
                <Form.Select disabled></Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} disabled>
              Add to diary
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewFoodDialog
