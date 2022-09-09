import React from 'react'
import '../Styles/SideNav.css'
import SideNav from './SideNav'
import SideNavNav from './SideNavNav'

function SideNavMain() {
  return (
    <div className='side-main'>
        <SideNavNav/>
        <SideNav/>
        
    </div>
  )
}

export default SideNavMain