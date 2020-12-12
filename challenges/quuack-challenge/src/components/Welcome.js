import React from "react";
import { withRouter, Link } from "react-router-dom";

import './Welcome.css';

const Welcome = () => {

  return (

    <div className="welcome-container">
      <div className="item">
        <div>
          <h2>Welcome to our Hiring Process</h2>
          <br />
          <br />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry s standard dummy text ever since the 1950s,
          when an unknown printer took a gallery of type and scrambled it to make a type specimen book</p>
          <br />
          <br />
        </div>
        <div>
          <button><Link to="/step-one">Start Registration</Link></button>
        </div>
      </div>
    </div>
  
  );
};

export default withRouter(Welcome);