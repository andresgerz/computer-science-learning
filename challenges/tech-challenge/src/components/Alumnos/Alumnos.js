import React from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateAlumno from "../../actions/alumnosAction";

import './Alumnos.css';

function Alumnos() {


  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateAlumno);
  const onSubmit = data => {
    action(data);
  };

  return (
  <div class="alumnos-wrapper">
    
    <Form onSubmit={handleSubmit(onSubmit)} className="item">
      <br/>
      <br/>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            
            type="string"
            name="nombre"
            defaultValue={state.alumnos.nombre}
            ref={register({
              required: "Nombre es requerido",
              maxLength: {
                value: 8,
                message: "Max length is 8"
              },
              pattern: {value: /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/,
                message: "Su nombre es incorrecto."}
            })}
          />
          {errors.nombre && <Alert variant='danger'>{errors.nombre.message}</Alert>}
          
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Legajo</Form.Label>
          <Form.Control
            type="number"
            name="legajo"
            defaultValue={state.alumnos.legajo}
            ref={register({
              required: "Legajo es un número requerido",
              maxLength: {
                value: 7,
                message: "Máximo 7 dígitos"
              },
              minLength: {
                value: 5,
                message: "Mínimo 5 dígitos"
              },
              pattern: /[0-9]/
            })}
          />
          {errors.legajo && <Alert variant='danger'>{errors.legajo.message}</Alert>}
          

        </Form.Group>
      </Form.Row>
      <br/>
      <br/>
      <Form.Row>
        <Button type="submit" className="m-auto">Submit</Button>
      </Form.Row>
    </Form>
  </div>  
  );
}


export default Alumnos;