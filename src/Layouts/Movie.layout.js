import React from "react";



//Components
import MovieNavbar from "../componets/Navbar/MovieNavbar.components";


const MovieLayout = (props) => {
    return(
        <>
        <MovieNavbar />
        
        {props.children}
        </>
    )
}


export default MovieLayout;