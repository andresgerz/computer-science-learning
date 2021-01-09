import React from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useStateMachine } from "little-state-machine";
import updateTiro from "../../actions/tirosAction";

import './TirosForm.css'

function TirosForm() {

  
  const { register, handleSubmit, errors } = useForm();
  const { action, state } = useStateMachine(updateTiro);
  const onSubmit = data => {
    
    action(data);
    
  };


  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} className="tiros-form-wrapper">
        <Form.Row className="mr-5">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Tirador</Form.Label>
            <Form.Control
              required
              type="string"
              name="tirador"
              defaultValue={state.tiros.tirador}
              ref={register({
                required: "this is a required",
                maxLength: {
                  value: 8,
                  message: "Max length is 8"
                }
              })}
            />
            {errors.tirador && <Alert variant='danger'>{errors.tirador.message}</Alert>}

          </Form.Group>
        
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Distancia</Form.Label>
            <Form.Control
              required
              type="number"
              name="distancia"
              
              ref={register({
                required: "this is a required",
                maxLength: {
                  value: 20,
                  message: "Max length is 20"
                }
              })}
            />
            {errors.distancia && <Alert variant='danger'>{errors.distancia.message}</Alert>}
            

          </Form.Group>
        
          <fieldset>
            <Form.Group as={Col} md="4">
              
              <Col sm={12}>
                <Form.Check
                  checked
                  type="radio"
                  label="Encestó"
                  id="formHorizontalRadios1"
                  name="encestar"
                  value="Si"
                  defaultValue={state.tiros.encestar}
                  ref={register}
                />
                <Form.Check
                  type="radio"
                  label="No encestó"
                  id="formHorizontalRadios2"
                  value="No"
                  name="encestar"
                  defaultValue={state.tiros.encestar}
                  ref={register}
                />

              </Col>
            </Form.Group>
          </fieldset>
        
          <Form.Group as={Col} md="2" controlId="exampleForm.SelectCustom">
            
            <Form.Label>Posición de Tiro</Form.Label>
            <Form.Control 
              as="select" 
              name="posicion"
              defaultValue={state.tiros.posicion}
              ref={register}
              custom>
              <option value="De frente">De frente</option>
              <option value="Lado derecho">Lado derecho</option>
              <option value="Lado izquierdo">Lado izquierdo</option>
              <option value="Punta derecha">Punta derecha</option>
              <option value="Punta izquierda">Punta izquierda</option>
            </Form.Control>
          
          </Form.Group>
          <Form.Group as={Col} md="1">
            <Button type="submit" className="tiros-form-buttom">Submit</Button>
          </Form.Group>
        </Form.Row>
       
      </Form>
    </div>
    )}

export default TirosForm;