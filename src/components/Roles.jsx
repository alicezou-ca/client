import React, { Children } from "react";
import robotics from "./images/robotics.png"
import './styles.css'; // Path to your CSS file 


const Roles =({roleName, description, picture}) => {
    return (
    <>
    <div class="container">
      <div class="image">
        <img src={robotics} alt="Image"/>
      </div>
      <div class="text">
        <h1>{roleName}</h1>
        <h6>{description}</h6>
      </div>
    </div>
    </>

    )
}

export default Roles; 