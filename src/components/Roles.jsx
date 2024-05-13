import React, { Children } from "react";
import satellite from "./images/satellite.jpeg"
import './styles.css'; // Path to your CSS file 


const Roles =({roleName, description, picture}) => {

    return (
    <div className="outer-container">
      <div class="container">
        <div class="rectangle">
            <img src={picture} alt="Image"/>
          <div>
            <h1>{roleName}</h1>
            <h6>{description}</h6>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Roles; 