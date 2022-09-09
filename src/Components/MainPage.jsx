import React from 'react'
import '../Styles/MainPage.css'
import logo from '../Images/logo.svg'
import ham1 from '../Images/ham1.svg'
import Completed from './Completed'
import Delivered from './Delivered'
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneSideNav from './PhoneSideNav'
import { ShowSideNav } from '../NavSlice'

function MainPage() {

    const dispatch = useDispatch()
  const{sideNav}= useSelector((state)=>state.sideNavSlice)
    
  return (
    <div className='main-page'>
        {/* phone navigation */}
        <div className='phone-nav'>

            {/* logo */}
            <div className='logo-divv'>
                <img src={logo} alt=''></img>
            </div>

            {/* hamburger menu */}
            <div className='nam-divv' onClick={()=>{
                dispatch(ShowSideNav(true))
            }}>
                <img src={ham1} alt=''></img>
            </div>
        </div>

        {/* open side nav */}

        <Routes>
            <Route path='/'  element={<Delivered/>} />
            <Route path='/completed' exact element={ <Completed/>}/>
        </Routes>

        {/* side nav phone */}
        {
            sideNav &&
            <PhoneSideNav/>
        }
        
        
       
    </div>
  )
}

export default MainPage