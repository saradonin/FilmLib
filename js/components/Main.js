import React from "react";
import {Provider} from "react-redux";
import {MovieDetails} from "./MovieDetails";
import {Navbar, ResponsiveAppBar} from "./Navbar";

const Main = () => {
    return (
        <>
            <ResponsiveAppBar/>
            <Navbar/>
            <MovieDetails movieId={"tt1285016"}/>
        </>
    )
}

export default Main
