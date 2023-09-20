/*
This Routes paths to the pages!
*/

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './components/Characters';
import RaceSelect from './pages/RaceSelect'


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* This route is for the CreateCharacter component with exact path "/create" */}
                <Route path="/create" element={<RaceSelect />} />

                {/* This route is for the Characters component with path "/characters" */}
                <Route path="/characters" element={<Characters />} />
            </Routes>
            {/* This Navigate component will act as a default or home route */}
        </BrowserRouter>
    )
}

export default AppRouter