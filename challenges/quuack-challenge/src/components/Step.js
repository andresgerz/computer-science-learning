import React from 'react';

import './Step.css';

function Step({number, color}) {

  
  
  return(
    <>
      <li className="cell-wrapper">
        <svg>
          <circle
            style={{fill: color ? '#211E1E':'#fff' , stroke: '#211E1E'}}
            cx={10} cy={10} r={10}
          />
          <text 
            x="35%" 
            y="42%" 
            textAnchor="middle" 
            dy="1px" 
            style={{fill: color ? '#fff' : '#211E1E'}}
            >{number}
          </text> 
        </svg>
      </li>  
    
    </>
  )
}

export default Step;