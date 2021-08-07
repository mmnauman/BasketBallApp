import React, {
  useReducer,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import { Reducer } from "../stateManagement/Reducer";
import { Context } from "./../Store";
import Styled from "styled-components";
import { Form, Row, Button } from "react-bootstrap";
import img from "./BG2.jpg";
import Loader from "./Loader";
import Select from "react-select";

const MainWrapper = Styled.div`

font-family: 'Graduate', cursive;

body{
  background-image: url(${img})!important;
}import Loader from './Loader';




box-sizing: border-box;
width: 1000px;
background: rgab(0,0,0,.5);
margin: 40px auto;
box-shadow: 0px 0px 5px 2px #000;
min-height: 500px;
display: grid;
align-content: center;
color: #fff;

h1{
  font-size: 1.8em;
  background-color: rgba(0,0,0,.9);
  padding: 10px;
}

.formGroup{
  width: 100%;
  text-align: left
}

.select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;

}

label{
  font-size: 1.2em;
  background-color: rgba(0,0,0,.8);
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.PlayerName{
  margin: 10px 0px;
}

.selectBox{
    width: 100%;
    min-width: 300px;
}

.SelectHeading{
  color: #FFF;
  margin-bottom 40px;
  padding: 10px;
  background-color: rgba(0,0,0,.5);
  font-size: 2em;
  font-weight: bold;
}

.selectBox{
  color: #000;
  background-color: #000;
}

`;

const ArrayOfOptions = [
  {
    value: 1,
    label: "Point Guard (PG)",
  },
  { value: 2, label: "Shooting Guard (SG)" },
  { value: 3, label: "Small Forward (SF)" },
  { value: 4, label: "Power Forward (PF)" },
  { value: 5, label: "Center (C)" },
];

let SelectedValues = [];

function CreateTeam() {
  const [state, dispatch] = useContext(Context);
  // const [state, dispatch] = useReducer(Reducer, {team:[]});
  const [isLoaded, setLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [firstNameError, setfirstNameError] = useState({
    error: false,
    content: "",
  });
  const [lastNameError, setlastNameError] = useState({
    error: false,
    content: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fname = useRef();
  const lname = useRef();
  const age = useRef();
  const position = useRef();
  const id = useRef();

  function ValidateErrors() {
    console.log(firstName);
  }

  function handleSelectElement(e) {
    setSelectedValue(
      Array.isArray(e)
        ? e.map((x) => {
            return { label: x.label, value: x.value };
          })
        : []
    );
  }

  function AddPlayerHandler(e) {
    e.preventDefault();
    console.log();
    if (firstName === "") {
      alert("hey");
    }

    console.log(fname.current.value);
    console.log(lname.current.value);
    console.log(age.current.value);
    console.log(position.current.value);

    const player = {
      firstName: fname.current.value,
      lastName: lname.current.value,
      age: age.current.value,
      position: selectedValue,
      id,
    };

    dispatch({
      type: "ADD_PLAYER",
      payload: player,
    });

    e.target.reset();
  }

  function allow_alphabets(element) {
    let textInput = element.target.value;
    textInput = textInput.replace(/[^A-Za-z ]*$/gm, "");
    setfirstName(textInput);
  }

  function allow_alphabets1(element) {
    let textInput = element.target.value;
    textInput = textInput.replace(/[^A-Za-z ]*$/gm, "");
    setlastName(textInput);
  }

  return isLoaded === false ? (
    <Loader />
  ) : (
    <MainWrapper>
      <h1>CREATE A PLAYER</h1>
      <Form onSubmit={(e) => AddPlayerHandler(e)}>
        <Row>
          <Form.Group className="formGroup" controlId="formGroupEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              ref={fname}
              type="text"
              className="control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => allow_alphabets(e)}
            />
            {/* Error Should be displayed here */}
          </Form.Group>
        </Row>
        <Form.Group className="formGroup">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            ref={lname}
            required={true}
            type="text"
            className="control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => allow_alphabets1(e)}
          />
        </Form.Group>
        <Form.Group className="formGroup">
          <Form.Label>Age </Form.Label>
          <Form.Control
            ref={age}
            min="1.0"
            required={true}
            type="number"
            className="control"
            placeholder="Height"
          />
        </Form.Group>
        <div className="formGroup">
          <label>Select Position</label>
          <Select
            options={ArrayOfOptions}
            ref={position}
            required={true}
            name="SelectPosition"
            id="SelectPosition"
            className="selectBox"
            isClearable
            isMulti
            onChange={handleSelectElement}
          ></Select>
        </div>
        <input ref={id} type="hidden" id={state.team.length + 1} />
        <div className="d-grid gap-2">
          <Button type="submit" size="lg" className="mt-3" variant="dark">
            CREATE PLAYER
          </Button>
        </div>
      </Form>
    </MainWrapper>
  );
}

export default CreateTeam;
