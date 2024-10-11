import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetScreen from "./screens/planets";

const Routess = () => ( // maneira abreviada que não precisa colocar o return.
    <BrowserRouter>
        <Routes>
            <Route  path='/' element={<PlanetScreen/>}/>
        </Routes>
    </BrowserRouter>

)

export default Routess;