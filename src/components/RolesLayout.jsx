import React from "react";
import Roles from "./Roles";

const RolesLayout =() => {
    return (
        <>
        <Roles/>
        <Roles/>
        <Roles roleName="test" description="description"/>
        </>

    )
}

export default RolesLayout;