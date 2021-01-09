import './App.css'

import React, {Component} from 'react'
import NavbarWeb from '../src/components/NavbarWeb'
import { StateMachineProvider, createStore } from "little-state-machine";

import 'bootstrap/dist/css/bootstrap.min.css';


createStore({
  alumnos: [],
  tiros: []
});


class App extends Component {
  render() {
    return( 
      <StateMachineProvider>
        <div className="App">
          <NavbarWeb />
        </div>
      </StateMachineProvider>   
    )
  }
}

export default App;