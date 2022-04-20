import { Button, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const EditGoalsDialog = ({goals, editGoals}) => {
    const [show, setShow] = useState(false);
    const [calorie, setCalorie] = useState(goals.calorie)
    const [carbs, setCarbs] = useState(goals.carbs)
    const [protein, setProtein] = useState(goals.protein)
    const [fat, setFat] = useState(goals.fat)
    const [fiber, setFiber] = useState(goals.fiber)

    const handleClose = () => setShow(false);
    const handleShow = () =>  setShow(true);
    const handleSave = () => {
        var newGoals = {
            "calorie": parseFloat(calorie),
            "carbs": parseFloat(carbs),
            "protein": parseFloat(protein),
            "fat": parseFloat(fat),
            "fiber": parseFloat(fiber)
        }
        editGoals(newGoals)
        handleClose()
    }    


  return (
    <>
    <Button variant="warning" className="mb-3" onClick={handleShow}>
      Edit goals
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit goals</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="editGoalsForm.ControlInput1">
            <Form.Label>Kcal</Form.Label>
            <Form.Control                
              autoFocus
              onChange={(e) => (setCalorie(e.target.value))}
              type="number"
              defaultValue={goals.calorie}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editGoalsForm.ControlInput2">
            <Form.Label>Carbs</Form.Label>
            <Form.Control     
               onChange={(e) => (setCarbs(e.target.value))}
              type="number"
              defaultValue={goals.carbs}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editGoalsForm.ControlInput3">
            <Form.Label>Protein</Form.Label>
            <Form.Control     
               onChange={(e) => (setProtein(e.target.value))}
              type="number"
              defaultValue={goals.protein}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editGoalsForm.ControlInput4">
            <Form.Label>Fat</Form.Label>
            <Form.Control   
               onChange={(e) => (setFat(e.target.value))}
              type="number"
              defaultValue={goals.fat}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="editGoalsForm.ControlInput5">
            <Form.Label>Fiber</Form.Label>
            <Form.Control   
               onChange={(e) => (setFiber(e.target.value))}
              type="number"
              defaultValue={goals.fiber}
            />
          </Form.Group>
         
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave} 
        >
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditGoalsDialog