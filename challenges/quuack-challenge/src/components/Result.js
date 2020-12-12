import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Table } from "react-bootstrap";


import './Result.css';

const Result = props => {
  const { state } = useStateMachine(updateAction);
  console.log("state22");
  console.log(state);

  return (
    <div className="result-wrapper">  
      <Table responsive="sm">
        <thead>
        <tr>
        <th>#</th>
        <th>Results</th>
        
        </tr>
        </thead>
        <tbody>
        { Object.keys(state.data).map((key, idx) => 
          
          state.data[key] ?

          <tr key={idx}>
            <td>{key}:</td>
            <td>{state.data[key]}</td>
        
          </tr>            

          : null  
          
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Result;