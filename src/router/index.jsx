import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Add_Blog from '../pages/Add-Blog';
import Error from '../pages/Error';
import Nabvar from '../Layout/Nabvar';
import Protected from './Protected';

const Router = () => {
    const [isLogIn, setIsLogIn] = useState(false);
    return (
        <BrowserRouter>
            <Nabvar />
            <button onClick={() => setIsLogIn(!isLogIn)}>{isLogIn ? "Log Out" : "Log In"}</button>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/add-blog' element={ <Protected isLogIn={isLogIn}>
                    <Add_Blog />
                </Protected> }/>
                <Route path='*' element={<Error />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router