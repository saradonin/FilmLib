import React from "react";
import {Provider} from "react-redux";
import MovieDetails from "./Movie/MovieDetails";
import {HashRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import store from "../redux/store";
import Rated from "./Rated/Rated";
import Watchlist from "./Watchlist/Watchlist";
import Search from "./Search/Search";

export default function Main () {
    return (
        <>
            <Provider store={store}>
                <HashRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Search/>}/>
                        <Route path={"/search"} element={<Search/>}/>
                        <Route path={"/title/:movieId"} element={<MovieDetails/>}/>
                        <Route path={"/watchlist"} element={<Watchlist/>}/>
                        <Route path={"/rated"} element={<Rated/>}/>
                    </Routes>
                </HashRouter>
            </Provider>
        </>
    )
}

