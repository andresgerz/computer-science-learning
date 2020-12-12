import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, useParams, useLocation } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Routes from './Routes';
import Steps from './components/Steps';

import 'bootstrap/dist/css/bootstrap.min.css';

createStore({
  data: {},
  color: [false,false,false]
});


function App() {

  const [showIt, setShowIt] = React.useState(true);
  const [path, setPath] = React.useState("");

  const setPathname = (pathname) => {

    console.log(pathname);
    setPath(pathname);

    if (pathname === "/" || pathname === "/result") {
      setShowIt(false);
    } else {
      setShowIt(true);
    }
  }

  return (
    <StateMachineProvider>
      <div className="app-container">
        { showIt ? 
          <div className="item steps">
            <Steps show={path} /> 
          </div> :
          null 
        }
        <div className="item form">
          <Router>
              <Routes setPathname={setPathname} />
          </Router>
        </div>  
      </div>
    </StateMachineProvider>
  );
}


function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


export default App;