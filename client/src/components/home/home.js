import React from 'react'
import "./home.css"

import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import  axios  from 'axios'

export const Home = (props) => {

    //*Router
    const navigate = useNavigate()

    let[userinfo,setUserinfo] = useState({})

    useEffect(()=>{
        setUserinfo(JSON.parse(sessionStorage.getItem('userinfo')) )
        secroute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const secroute = ()=>{
        let usinfo = JSON.parse(sessionStorage.getItem('userinfo'))
        if(!usinfo){
            navigate("/")
        }
    }

    const logout = ()=>{
        sessionStorage.clear()
        navigate("/")
    }

    return(
        <div>
            <div className='home-nav'>
                <h1>Welcome {userinfo.firstname} {userinfo.lastname}</h1>
                <button className='btn btn-danger px-4 ' type='button' onClick={logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Home