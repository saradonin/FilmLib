import React from "react";
import {Provider} from "react-redux";
import {MovieDetails} from "./Movie/MovieDetails";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Search} from "./Search/Search";
import {Navbar} from "./Navbar";
import store from "../redux/store";

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <HashRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Search/>}/>
                        <Route path={"/film/"} element={<MovieDetails movieId={"tt2190483"}/>}/>
                    </Routes>
                </HashRouter>
            </Provider>
        </>
    )
}

export default Main
