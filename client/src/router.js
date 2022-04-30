import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Myaccount from "./components/myaccount/myaccount";
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';


const RouterComp = () => {
return (
    <Router className="container">

    <Routes>
        <Route path="/home" element={<Home/>} exact></Route>
        <Route path="/" element={<Myaccount/>} exact></Route>
    </Routes>
    </Router>
)
}

export default RouterComp