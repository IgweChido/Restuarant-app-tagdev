import React from 'react'
import SideNav from './SideNav'
import SideNavNav from './SideNavNav'
import cancel from '../Images/cancel-btn.png'
import { useDispatch } from 'react-redux'
import { ShowSideNav } from '../NavSlice'

function PhoneSideNav() {
    const dispatch = useDispatch()
  return (
    <div className='phone-side'>
        {/* cancel btn */}
        <div className='cancel' onClick={()=>{
            dispatch(ShowSideNav(false))
        }}>
            <img src={cancel} alt=''></img>
        </div>
        {/* main */}
        <div className='phones-main'>
            <SideNavNav/>
            <SideNav/>
        </div>
       
        

    </div>
  )
}

export default PhoneSideNav