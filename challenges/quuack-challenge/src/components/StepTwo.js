import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { ButtonGroup, ToggleButton, ButtonToolbar } from 'react-bootstrap';

import './StepTwo.css';

const StepTwo = props => {
  const [checked, setChecked] = useState(false);

  const[tools, setTools] = useState([
    {title:"ReactJS",value:false},
    {title:"Webpack",value:false},
    {title:"AngularJS",value:false},
    {title:"Yarn",value:false},
    {title:"NPM",value:false},
    {title:"ExpressJS",value:false},
    {title:"NodeJS",value:false},
    {title:"JQuery",value:false},
    {title:"Redux",value:false},
    {title:"Hooks",value:false},
    {title:"VueJS",value:false},
    {title:"Grunt",value:false}
  ])

  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./step-three");
  };
  
  const updateDat = index => e => {
    let newArr = [...tools];
    newArr[index] = {title: e.target.name, value: e.target.value? true : false};

    setTools(newArr);

    console.log("updating");
    console.log(tools);
  }


  return (
    <div className="step-two-container">
    <form onSubmit={handleSubmit(onSubmit)} className="item">
    <h2>Tell us about yourself</h2>
    
    <p>Which Javascript Tools/Frameworks do you like?</p>
    <div className="buttons-wrapper">
    
    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups" >
    
    {tools.map((skill, i) =>
      
      <ButtonGroup toggle className="mr-3" key={i}>
      <ToggleButton
        type="checkbox"
        variant="secondary"
        checked={checked === skill.value}
        id={skill.title}
        name={skill.title}
        value={skill.value}
        ref={register}
        onChange={updateDat(i)}
      >
      {skill.title}
      </ToggleButton>
      </ButtonGroup>
      
      )}
      </ButtonToolbar>    
      </div>
      
      <br/>
      <br/>
      <label>Others:</label>
      <br/>
      <input
      type="text"
      name="others"
      defaultValue={state.data.others}
      ref={register}
      />
    
      <br/>
      <button><Link to="/step-one">Back</Link></button>
      <button type="submit">Continue</button>
      <br/>
      <Link to="/step-three">skip this step</Link>
    </form>
    </div>
  );
};

export default withRouter(StepTwo);

