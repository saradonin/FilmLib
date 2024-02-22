import React from "react";
import {Provider} from "react-redux";
import MovieDetails from "./Movie/MovieDetails";
import {HashRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import store from "../redux/store";
import SearchContainer from "../containers/SearchContainer";
import WatchlistContainer from "../containers/WatchlistContainer";
import RatedContainer from "../containers/RatedContainer";

export default function Main () {
    return (
        <>
            <Provider store={store}>
                <HashRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<SearchContainer/>}/>
                        <Route path={"/search"} element={<SearchContainer/>}/>
                        <Route path={"/title/:movieId"} element={<MovieDetails/>}/>
                        <Route path={"/watchlist"} element={<WatchlistContainer/>}/>
                        <Route path={"/rated"} element={<RatedContainer/>}/>
                    </Routes>
                </HashRouter>
            </Provider>
        </>
    )
}

