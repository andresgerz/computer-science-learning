import React from "react";
import { useStateMachine } from "little-state-machine";
import tirosAction from "../../actions/tirosAction";
import { Table } from "react-bootstrap";


const TirosList = () => {

  const { state } = useStateMachine(tirosAction);

  return(
    <div className="item">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tirador</th>
            <th>Distancia</th>
            <th>Encestar</th>
            <th>Posición de tiro</th>
          </tr>
        </thead>
        <tbody>
        { state.tiros.map((tiro,i) => 
            <tr key={i}>
              <td>{tiro.tirador}</td>
              <td>{tiro.distancia}</td>
              <td>{tiro.encestar}</td>
              <td>{tiro.posicion}</td>
            </tr>
          )
        }
        </tbody>
      </Table> 
    </div>
  )
}


export default TirosList;