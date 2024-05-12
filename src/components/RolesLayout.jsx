import React from "react";
import Roles from "./Roles";
import robotics from "./images/robotics.png"
import satellite from "./images/satellite.jpeg"
import wecs from "./images/wecs.png"
import './styles.css'; // Path to your CSS file 

const RolesLayout =() => {
    return (
        <>
        <Roles roleName="UVIC Robotics Software Lead" 
               description="As the incoming software lead for UVIC Robotics, I will be developing important technical 
               skills while also learning how to lead a project with many moving parts. This summer, our main objective 
               is to build a rover for the Canadian International Rover Competition, which will require developing firmware 
               and working together with other teams within the club."
               picture={robotics}/>
        <Roles roleName="WECS VP External Outreach" 
               description="As VP External Outreach, I’ve developed critical softskills in my responsibilities 
               leading the collaborations between WECS and numerous other organizations across Western Canada. 
               As a member of the core team, another important part of my role is to work together with my teammates 
               in order to determine how to best move forward with crucial decisions regarding our organization. "
               picture={wecs}/>
        <Roles roleName="UVSD Computer Team Member" 
               description="As a member of the UVIC Satellite Design club, I’ve received valuable insight into projects in the 
               aerospace industry in the research and development process of the 2023/2024 weather balloon. This summer, I plan 
               to further my technical skills by working with the club to design a payload to be delivered in future projects."
               picture={satellite}/>
        </>

    )
}

export default RolesLayout;