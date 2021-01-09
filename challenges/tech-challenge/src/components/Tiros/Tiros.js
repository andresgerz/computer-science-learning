import React from 'react';
import TirosForm from "./TirosForm";
import TirosList from "./TirosList";

import "./Tiros.css";

function Tiros() {

  return(
    <div className="tiros-wrapper">
      <TirosForm />
      <TirosList />
    </div>
  )
}

export default Tiros;