import React, { useState, useEffect, useReducer, Component } from 'react';
import Step from './Step';
import { useStateMachine } from "little-state-machine";

import updateColor from './updateAction'; 

import './Steps.css';
import { render } from '@testing-library/react';

const Steps = ({show}) => {


  /* const [color1,useColor1] = React.useState(false);
  const [color2,useColor2] = React.useState(false);
  const [color3,useColor3] = React.useState(false); */
  const [color,setColor] = React.useState([true,false,false]);
  
  const { action, state } = useStateMachine(updateColor);

  const onSubmit = data => {
    action(data);
    
  };

  
  return(
    <div className="steps-wrapper">
      <nav className="w-25">
        <ul>
          <Step number="1" color={show === "/step-one"} />
          <svg className="line"><line x1="0" y1="0" x2="250" y2="0" stroke="black" /></svg>
          <Step number="2" color={show === "/step-two"} />
          <svg className="line"><line x1="0" y1="0" x2="250" y2="0" stroke="black" /></svg>
          <Step number="3" color={show === "/step-three"} />
        </ul>
      </nav>
    </div>
  )
  
}

export default Steps;