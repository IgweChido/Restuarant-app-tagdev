import React from 'react'
import '../Styles/MainContainer.css'
import MainPage from './MainPage'
import SideNav from './SideNav'
import SideNavMain from './SideNavMain'


function MainContainer() {
  return (
    <div className='main-container'>
        <SideNavMain/>
        <MainPage/>
        
    </div>
  )
}

export default MainContainer