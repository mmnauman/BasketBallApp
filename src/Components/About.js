import React from "react";
import Styled from "styled-components";

const AboutStyled = Styled.div`
background-color: rgba(0,0,0,.8);
width: 100%;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;

.AboutContainer{
width: 800px;
color: #fff;
font-family: 'Graduate', cursive;
}

span{
    color: yellow;
}

`;

function ABOUT() {
  return (
    <AboutStyled>
      <div className="AboutContainer">
        <h1>
          A PERSONAL PROJECT BY <span>MM NAUMAN</span> For <span>SYSTANGO</span>
        </h1>
      </div>
    </AboutStyled>
  );
}

export default ABOUT;
