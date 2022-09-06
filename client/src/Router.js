import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Store from './routes/Store';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppRouter = ()=> {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/menu' element={<Menu/>}></Route>
                <Route exact path='/store' element={<Store/>}></Route>
            </Routes>
        </Router>
    )
};
export default AppRouter;