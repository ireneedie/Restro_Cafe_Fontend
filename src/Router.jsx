import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "./containers/Home";
import { Cart } from "./containers/Cart";



const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/cart"} element={<Cart />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;
