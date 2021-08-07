import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";
import ErrorComp from "./Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./Loader";
import { Button } from "react-bootstrap";
import { useRef } from "react";

const TeamsContainerStyled = Styled.div`
font-family: 'Graduate', cursive;
width: 1000px;
margin: 40px auto;
box-shadow: 0px 0px 5px 2px #000;
display: grid;
align-content: center;

.select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 50px;

}

.PlayerName, .PlayerPosition{
  margin: 10px 0px;
  width: 50%;
}

.selectBox{
    width: 100%;
    min-width: 300px;
}

.SelectHeading{
  color: #FFF;
  margin-bottom 40px;
  padding: 10px;
  background-color: rgba(0,0,0,.8);
  font-size:1.8em;
  font-weight: bold;
  font-family: 'Graduate', cursive;
}

.playerHeadings{
  display: flex;
  justify-content: space-around;
  color: #eee;
  font-size: 18px;

  h2{
    font-size: 1.4em;
    background-color: rgba(0,0,0,.8);
    padding: 10px;
    min-width: 300px;
  }

}

.ErrorComponent{
    padding: 10px!important;
    margin: 10px 0px!important;

p{
    margin: 5px!important
}
}


`;

let states = [];
let selectedStates = [];

function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);
  const [ErrorContent, setErrorContent] = useState("");
  const [ShowError, setShowError] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [showSubmitBtn, setSubmitBtn] = useState(false);

  let alertBox = useRef();

  const [statesData, setStatesData] = useState(states);
  const [SelectStatesData, setSelectStatesData] = useState(selectedStates);

  const [stateValue, setstateValue] = useState([]);
  const [stateValue2, setstateValue2] = useState([]);
  const [stateValue3, setstateValue3] = useState([]);
  const [stateValue4, setstateValue4] = useState([]);
  const [stateValue5, setstateValue5] = useState([]);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  useEffect(() => {
    setLoaded(true);
    // setStatesData([]);
    // setSelectStatesData([]);
    console.log(states, selectedStates);
    statesData.length === 5 && SelectStatesData.length === 5
      ? setSubmitBtn(true)
      : setSubmitBtn(false);
  }, [
    changeHandler,
    changeHandler2,
    changeHandler3,
    changeHandler4,
    changeHandler5,
    SelectHandler1,
    SelectHandler2,
    SelectHandler3,
    SelectHandler4,
    SelectHandler5,
  ]);

  function closeHandler() {
    setShowError(false);
  }

  function changeHandler(evnt) {
    if (!statesData.includes(evnt)) {
      statesData.push(evnt);
      setstateValue(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState1(true);
    } else {
      console.log(this);
      setShowError(true);
      setErrorContent(
        `You have already selected this Player ${evnt.firstName} ${evnt.lastName}. Player Can Be Selected Once.`
      );

      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler2(evnt) {
    if (!statesData.includes(evnt)) {
      statesData.push(evnt);
      setstateValue2(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState2(true);
    } else {
      console.log("error");
      setShowError(true);
      setErrorContent(
        `You have already selected this Player ${evnt.firstName} ${evnt.lastName}. Player Can Be Selected Once.`
      );
    }
    console.log(evnt);
  }

  function changeHandler3(evnt) {
    if (!statesData.includes(evnt)) {
      statesData.push(evnt);
      setstateValue3(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      setState3(true);
    } else {
      console.log("error");
      setShowError(true);
      setErrorContent(
        `You have already selected this Player ${evnt.firstName} ${evnt.lastName}. Player Can Be Selected Once.`
      );
    }
    console.log(evnt);
  }

  function changeHandler4(evnt) {
    if (!statesData.includes(evnt)) {
      statesData.push(evnt);
      setstateValue4(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState4(true);
    } else {
      console.log("error");
      setShowError(true);
      setErrorContent(
        `You have already selected this Player ${evnt.firstName} ${evnt.lastName}. Player Can Be Selected Once.`
      );
    }
    console.log(evnt);
  }

  function changeHandler5(evnt) {
    if (!statesData.includes(evnt)) {
      statesData.push(evnt);
      setstateValue5(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState5(true);
    } else {
      console.log("error");
      setShowError(true);
      setErrorContent(
        `You have already selected this Player ${evnt.firstName} ${evnt.lastName}. Player Can Be Selected Once.`
      );
    }
    console.log(evnt);
  }

  // END OF CHANGE START OF SELECT

  function SelectHandler1(evnt) {
    console.log(selectedStates);
    if (!selectedStates.includes(evnt)) {
      //   evnt.disabled = true;
      selectedStates.push(evnt);
      console.log(evnt);
    } else {
      console.log("error");
      setErrorContent(
        `You Have Already Selected This Position ${evnt.label}. You Cannot Select Same Position Again `
      );
      setShowError(true);
    }
    console.log(evnt);
  }

  function SelectHandler2(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
    } else {
      console.log("error");
      setErrorContent(
        `You Have Already Selected This Position ${evnt.label}. You Cannot Select Same Position Again `
      );
      setShowError(true);
    }
    console.log(evnt);
  }

  function SelectHandler3(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
      //setState3(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setErrorContent(
        `You Have Already Selected This Position ${evnt.label}. You Cannot Select Same Position Again `
      );
      setShowError(true);
    }
    console.log(evnt);
  }

  function SelectHandler4(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
      //setState4(`${evnt.firstName} ${evnt.lastName}`);
    } else {
      console.log("error");
      setErrorContent(
        `You Have Already Selected This Position ${evnt.label}. You Cannot Select Same Position Again `
      );
      setShowError(true);
    }
    console.log(evnt);
  }

  function SelectHandler5(evnt) {
    if (!selectedStates.includes(evnt)) {
      selectedStates.push(evnt);
    } else {
      console.log("error");
      setErrorContent(
        `You Have Already Selected This Position ${evnt.label}. You Cannot Select Same Position Again `
      );
      setShowError(true);
    }
    console.log(evnt);
  }

  return isLoaded === false ? (
    <Loader />
  ) : (
    <TeamsContainerStyled>
      <h1 className="SelectHeading">
        Select 5 Players To Play in Quarter's & Assign A Role
      </h1>

      <div>
        <div className="playerHeadings">
          <h2>PLAYER NAME</h2>
          <h2>PLAYER ROLE</h2>
        </div>

        {ShowError && (
          <ErrorComp ref={alertBox} nature="danger" closeHandler={closeHandler}>
            {ErrorContent}
          </ErrorComp>
        )}

        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={
                states.length > 0
                  ? team.filter((el, i) => el !== states[i])
                  : team
              }
              onChange={changeHandler}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
          <div className="PlayerPosition">
            <Select
              isDisabled={state1 ? false : true}
              className="selectBox"
              //   options={stateValue}
              options={
                selectedStates.length > 0
                  ? stateValue.filter((el, i) => {
                      console.log(el);
                      return el !== selectedStates[i];
                    })
                  : stateValue
              }
              onChange={SelectHandler1}
              getOptionLabel={(opt) => {
                return `${opt.label}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
        </div>

        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={
                states.length > 0
                  ? team.filter((el, i) => el !== states[i])
                  : team
              }
              onChange={changeHandler2}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
          <div className="PlayerPosition">
            <Select
              isDisabled={state2 ? false : true}
              className="selectBox"
              //   options={stateValue2}
              options={
                SelectStatesData.length > 0
                  ? stateValue2.filter((el, i) => {
                      return el !== SelectStatesData[i];
                    })
                  : stateValue2
              }
              onChange={SelectHandler2}
              getOptionLabel={(opt) => {
                return `${opt.label}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
        </div>

        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={
                states.length > 0
                  ? team.filter((el, i) => (el !== states[i] ? el : el))
                  : team
              }
              onChange={changeHandler3}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
          <div className="PlayerPosition">
            <Select
              className="selectBox"
              isDisabled={state3 ? false : true}
              //   options={stateValue3}
              options={
                SelectStatesData.length > 0
                  ? stateValue3.filter((el, i) => {
                      console.log(el);
                      return el !== SelectStatesData[i];
                    })
                  : stateValue3
              }
              onChange={SelectHandler3}
              getOptionLabel={(opt) => {
                return `${opt.label}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
        </div>

        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={
                states.length > 0
                  ? team.filter((el, i) => el !== states[i])
                  : team
              }
              onChange={changeHandler4}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>

          <div className="PlayerPosition">
            <Select
              isDisabled={state4 ? false : true}
              className="selectBox"
              //   options={stateValue4}
              options={
                selectedStates.length > 0
                  ? stateValue4.filter((el, i) => {
                      return el !== selectedStates[i];
                    })
                  : stateValue4
              }
              onChange={SelectHandler4}
              getOptionLabel={(opt) => {
                return `${opt.label}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
        </div>

        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={
                states.length > 0
                  ? team.filter((el, i) => el !== states[i])
                  : team
              }
              onChange={changeHandler5}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
          <div className="PlayerPosition">
            <Select
              isDisabled={state5 ? false : true}
              className="selectBox"
              //   options={stateValue5}
              options={
                selectedStates.length > 0
                  ? stateValue5.filter((el, i) => {
                      return el !== selectedStates[i];
                    })
                  : stateValue5
              }
              onChange={SelectHandler5}
              getOptionLabel={(opt) => {
                return `${opt.label}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
        </div>
      </div>

      {showSubmitBtn ? (
        <Button variant="dark">SAVE PLAYERS FOR QUARTERS</Button>
      ) : (
        <Button disabled variant="dark">
          SAVE PLAYERS FOR QUARTERS
        </Button>
      )}

      {/* {ShowError && <ErrorComp closeHandler={closeHandler}>You have already selected this Player. You cannot select same player Again</ErrorComp>} */}

      {/* {ShowError && (
        <ErrorComp nature="danger" closeHandler={closeHandler}>
          {ErrorContent}
        </ErrorComp>
      )} */}

      {/* You have already selected this Player. You cannot select same player Again */}

      {ShowError &&
        setTimeout(() => {
          setShowError(false);
        }, 4000)}
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
