import React from "react";
import { useForm } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import './StepThree.css';

const StepThree = props => {
  const { register, handleSubmit } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./result");
  };

  return (
    <div className="step-three-container">
      <form onSubmit={handleSubmit(onSubmit)} className="item">
      <h2>Keep in touch!</h2>
      
      <label>Would you like to receive email notifications from us?</label>
      <br />
      <input
        name="developer"
        type="radio"
        value="Yes"
        ref={register({ required: true })}
      />
      <label>Yes</label>
      
      <input
        name="developer"
        type="radio"
        value="No"
        ref={register({ required: true })}
      />
      <label>No</label>
      <br />
      <br />
      <p>Are you interested on</p>
      <div className="checkboxs">
        <input 
        type="checkbox" 
        id="learning-webinars" 
        name="learning-webinars"
        value="Learning Webinars"
        ref={register}
        />
        <label for="learning-webinars">learning Webinars</label>
      </div>
      
      <div className="checkboxs">
        <input 
        type="checkbox" 
        id="job-offers" 
        name="job-offers" 
        value="Job Offers"
        ref={register}
        />
        <label for="job-offers">Job Offers</label>
      </div>

      <div className="checkboxs">
        <input 
        type="checkbox" 
        id="job-offers-2" 
        name="job-offers-2" 
        value="Job Offers 2"
        ref={register}
        />
        <label for="job-offers-2">Job Offers</label>
      </div>
    
      <br />

      <button><Link to="/step-two">Back</Link></button>
      <button type="submit">Apply</button>
      
    </form>
    </div>
  );
};

export default withRouter(StepThree);
