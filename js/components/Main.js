import React from "react";
import {Provider} from "react-redux";
import {MovieDetails} from "./Movie/MovieDetails";
import {Navbar} from "./Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Search} from "./Search/Search";

const Main = () => {
    return (
        <>
            <HashRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Search/>}/>
                    <Route path={"/film/"} element={<MovieDetails movieId={"tt2190483"}/>}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Main
