import React from "react";


//Components
import Navbar from "../componets/Navbar/navbar.componet";
import HeroCarousal from "../componets/HeroCarousal/HeroCarousal.component"

const DefaultLayout = (props) => {
    return(
        <>
        <Navbar />
        <HeroCarousal />
        {props.children}
        </>
    )
}


export default DefaultLayout;