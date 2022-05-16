import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import * as NutrientService from "../Services/nutrient-service"

const NewFoodDialog = ({onAdd}) => {
    const [show, setShow] = useState(false);

    const [searchWord, setSearchWord] = useState("");
    const [amount, setAmount] = useState(0);
    const [selectedId, setSelectedId] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const resetValues = () => {
      setSearchResults("")
      setAmount(0)
      setSelectedId("")
      setSearchResults([])
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
      resetValues()
      setShow(true);
    }

    const countForAmount = (nutr) => {
      return parseFloat((nutr * (amount/100)).toFixed(2))
    }

    const handleSave = async () => {
      var food = await NutrientService.getFood(searchWord, selectedId)
      var newFood = {
        foodName : food.foodName,
        id : food.id,
        nutrients : {
          "calorie": countForAmount(food.calorie),
          "protein": countForAmount(food.protein),
          "fat": countForAmount(food.fat),
          "fiber": countForAmount(food.fiber),
          "carbs": countForAmount(food.carbs)
        }
  
      }
      
      onAdd(newFood, amount)
      handleClose();
    }


    const handleSearchClick = async () => {
      setSearchResults([])      
      const res = await NutrientService.getFoodByName(searchWord)
      var options = []
      var key_ = 0
      res.foodNames.forEach(element => {
        if(key_ ===  0){
          setSelectedId(element.id)
        }
        options = ([...options, <option key={key_++} value={element.id}>{element.foodName}</option>])
   
      });

      setSearchResults(options)
      
    }

  
    return (
      <>
        <Button variant="success" className="mb-3" onClick={handleShow}>
          Add food
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new food</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="newFoodForm.ControlInput1">
                <Form.Label>Search for foodname</Form.Label>
                <Form.Control                
                  autoFocus
                  onChange={(e) => setSearchWord(e.target.value)}
                  type="text"
                  placeholder="Type a foodname"
                />
               <Button variant="primary mt-3"
               onClick={()=>handleSearchClick()}
               >Search</Button> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="newFoodForm.ControlInput2">
                <Form.Label>Add amount in grams</Form.Label>
                <Form.Control
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="0"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="newFoodForm.ControlTextarea1"
              >
                <Form.Label>Results</Form.Label>
                <Form.Select
                 disabled={searchResults.length < 1}
                 onChange={(e)=>setSelectedId(e.target.value)}
                 >
                   {searchResults}
                 </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave} 
            disabled={!(searchWord && selectedId && amount > 0)}
            >
              Add to diary
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default NewFoodDialog
