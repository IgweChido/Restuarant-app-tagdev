import React from 'react'
import '../Styles/SideNav.css'
import logo from '../Images/logo.svg'
import box from '../Images/box.svg'
import file from '../Images/file.svg'
import settings from '../Images/settings.svg'


function SideNavNav() {
  return (
    <div className='side-nav-nav'>

        {/* logo */}
        <div className='logo-div'>
            <img src={logo} alt=''></img>
        </div>

        {/* nav-nav navigation */}
        <div className='nn-nav'>
            {/* nnn-comp */}
            <div className='nnn-comp nnn-light'>
                <img src={box} alt=''></img>
            </div>
        </div>

        {/* nav-nav navigation */}
        <div className='nn-nav'>
            {/* nnn-comp */}
            <div className='nnn-comp'>
                <img src={file} alt=''></img>
            </div>
        </div>

        {/* nav-nav navigation */}
        <div className='nn-nav'>
            {/* nnn-comp */}
            <div className='nnn-comp'>
                <img src={settings} alt=''></img>
            </div>
        </div>
        
    </div>
  )
}

export default SideNavNav