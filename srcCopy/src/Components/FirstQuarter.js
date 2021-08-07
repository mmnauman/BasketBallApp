import React, { useContext, useEffect, useState } from "react";
import { Context } from "./../Store";
import Styled from "styled-components";
import Select from "react-select";

const TeamsContainerStyled = Styled.div`

.select{
    display: flex;
    justify-content: center;
    align-items: center;
}

.selectBox{
  width: 200px;
}


`;

let states = [];

function FirstQuarter() {
  const [state, dispatch] = useContext(Context);
  const [team, setTeam] = useState(state.team);

  const [statesData, setStatesData] = useState(states);

  const [stateValue, setstateValue] = useState("");
  const [stateValue2, setstateValue2] = useState("");
  const [stateValue3, setstateValue3] = useState("");
  const [stateValue4, setstateValue4] = useState("");
  const [stateValue5, setstateValue5] = useState("");

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);

  useEffect(() => {
    setStatesData([]);
  }, []);

  function changeHandler(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setstateValue(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState1(true);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler2(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setstateValue2(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState2(true);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler3(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setstateValue3(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      setState3(true);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler4(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setstateValue4(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState4(true);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  function changeHandler5(evnt) {
    if (!states.includes(evnt)) {
      states.push(evnt);
      setstateValue5(
        Array.isArray(evnt.position) ? evnt.position : [evnt.position]
      );
      console.log(stateValue);
      setState5(true);
    } else {
      console.log("error");
    }
    console.log(evnt);
  }

  return (
    <TeamsContainerStyled>

{/* <div className='Details'>
    
</div> */}


      <div>
        <div className="select">
          <div className="PlayerName">
            <Select
              className="selectBox"
              options={team}
              onChange={changeHandler}
              getOptionLabel={(opt) => {
                return `${opt.firstName} ${opt.lastName}`;
              }}
              getOptionValue={(opt) => opt.id}
            />
          </div>
          {state1 && (
            <div className="PlayerPosition">
              <Select
                className="selectBox"
                options={stateValue}
                // onChange={changeHandler}
                getOptionLabel={(opt) => {
                  return `${opt.label}`;
                }}
                getOptionValue={(opt) => opt.id}
              />
            </div>
          )}
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
          {state2 && (
            <div className="PlayerPosition">
              <Select
                className="selectBox"
                options={stateValue2}
                // onChange={changeHandler2}
                getOptionLabel={(opt) => {
                  return `${opt.label}`;
                }}
                getOptionValue={(opt) => opt.id}
              />
            </div>
          )}
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
              isDisabled={() => }
            />
          </div>
          {state3 && (
            <div className="PlayerPosition">
              <Select
                className="selectBox"
                options={stateValue3}
                // onChange={changeHandler2}
                getOptionLabel={(opt) => {
                  return `${opt.label}`;
                }}
                getOptionValue={(opt) => opt.id}
              />
            </div>
          )}
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
          {state4 && (
            <div className="PlayerPosition">
              <Select
                className="selectBox"
                options={stateValue4}
                // onChange={changeHandler2}
                getOptionLabel={(opt) => {
                  return `${opt.label}`;
                }}
                getOptionValue={(opt) => opt.id}
              />
            </div>
          )}
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
          {state5 && (
            <div className="PlayerPosition">
              <Select
                className="selectBox"
                options={stateValue5}
                // onChange={changeHandler2}
                getOptionLabel={(opt) => {
                  return `${opt.label}`;
                }}
                getOptionValue={(opt) => opt.id}
              />
            </div>
          )}
        </div>
      </div>
    </TeamsContainerStyled>
  );
}

export default FirstQuarter;
