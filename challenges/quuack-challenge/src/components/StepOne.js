import React from "react";
import { useForm } from "react-hook-form";
import { withRouter, Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

import './StepOne.css';

const StepOne = props => {

  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAction);
  const onSubmit = data => {
    action(data);
    props.history.push("./step-two");
  };


  return (
    <div className="step-one-container">
      <form onSubmit={handleSubmit(onSubmit)} className="item">
        <h2>Personal Information</h2>
        <label>Full Name *</label>
        <br/>
        <input
          type="text"
          name="fullName"
          defaultValue={state.data.fullName}
          ref={register({ required: true, maxLength: 10 })}
          />
          {errors.fullName && <p>Full name is required</p>}

      
        <br/>
        <br/>
        <label>Email *</label>
        <br/>
        <input
          type="text"
          name="email"
          defaultValue={state.data.email}
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors.email && <p>This is not an email</p>}
        <br/>
        <br/>


        <label>Job Description *</label>
        <br/>
        <input
          type="text"
          name="jobDescription"
          defaultValue={state.data.jobDescription}
          ref={register({ required: true, maxLength: 300 })}
          />
        {errors.jobDescription && <p>Job Description is required</p>}

        <br/>
        <br/>
        <button><Link to="/">Back</Link></button>
        <button type="submit">Continue</button>
        <br/>
        <p>* mandatory fields</p>
      </form>
    </div>    
  );
};

export default withRouter(StepOne);
