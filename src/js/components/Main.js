import React from "react";
import {Provider} from "react-redux";
import {MovieDetails} from "./Movie/MovieDetails";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Navbar";
import store from "../redux/store";
import SearchContainer from "../containers/SearchContainer";

const Main = () => {
    return (
        <>
            <Provider store={store}>
                <HashRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<SearchContainer/>}/>
                        <Route path={"/search"} element={<SearchContainer/>}/>
                        <Route path={"/title/:movieId"} element={<MovieDetails/>}/>
                    </Routes>
                </HashRouter>
            </Provider>
        </>
    )
}

export default Main
