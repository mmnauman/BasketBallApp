import "./App.css";
import { NavLink } from "react-router-dom";
import Nav from "./Components/Nav";
import React, { useState, useReducer, useRef } from "react";
import { Reducer } from "./stateManagement/Reducer";
import { Route } from "react-router-dom";
import CreateTeam from "./Components/CreateTeamNew";
import Store from "./Store";
import FirstQuarter from "./Components/Finals";
import Styled from "styled-components";
import Loader from "./Components/Loader";
import { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import ABOUT from "./Components/About";

const MainStyled = Styled.div`
font-family: 'Graduate', cursive;
h1{
  color: yellow;
  margin-top: 50px;
  font-family: 'Graduate', cursive;
  background-color: rgba(0,0,0,.8);
  padding: 10px;
}

.AppDetails{
  display: flex;
  justify-content: center;
  color: #fff;
  gap: 30px;
  width: 100%;
  margin-top: 80px;
}

.CREDITS{
  background-color: rgba(0,0,0,.7);
 padding: 20px;
  width: 100%;
  margin-top: 80px;
  color: #fff;
}

.sections{
 background-color: rgba(0,0,0,.7);
 padding: 20px;
  width: 100%;

  h2{
    margin: 10px 0px 20px 0px;
  }

  ol li{
    margin: 10px 0px
  }

}

.features{
  width: 50%;
}

.TechUsed{
  width: 50%
}

.REACT{
  color: #41e0fd;
}

footer span{
  color: yellow
}

`;

function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return isLoaded === false ? (
    <Loader />
  ) : (
    <Store>
      <Nav />
      <div className="App">
        <Route exact path="/BasketBallApp/">
          <MainStyled>
            <h1>Basket Ball Manager</h1>
            <div className="AppDetails">
              <div className="sections features">
                <h2>Features</h2>
                <ol>
                  <li>YOU CAN CREATE YOUR OWN TEAM</li>
                  <li>CUSTOMIZED EACH PLAYER ROLES</li>
                  <li>SELECT YOUR BEST COMBINATION FOR QUARTERS</li>
                </ol>
              </div>
              <div className="sections TechUsed">
                <h2>Languages and Libraries Used</h2>
                <ol>
                  <li>HTML5</li>
                  <li>VANILLA JAVASCRIPT</li>
                  <li>CSS3</li>
                  <li>REACTJS </li>
                  <li>REACT-ROUTER & HOOKS</li>
                </ol>
              </div>
            </div>

            <footer className="CREDITS">
              <h2>
                A PROJECT CREATED BY <span>MM NAUMAN</span> - PROUDLY USING{" "}
                <FaReact className="REACT" /> REACTJS
              </h2>
            </footer>
          </MainStyled>
        </Route>

        <Route path="/BasketBallApp/create">
          <CreateTeam />
        </Route>
        <Route path="/BasketBallApp/event">
          <FirstQuarter />
        </Route>

        <Route path="/BasketBallApp/about">
          <ABOUT />
        </Route>
      </div>
    </Store>
  );
}

export default App;
