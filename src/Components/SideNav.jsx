import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { ShowSideNav } from '../NavSlice'
import '../Styles/SideNav.css'

function SideNav() {
    const dispatch = useDispatch()
  return (
    <div className='side-nav'>
        {/* header */}
        <div className='sn-head'>
            <p>Orders</p>
        </div>

        {/* sub headers */}
        <div className='sub-headers'>

            {/* subh-comp */}
            <div className='subh-comp'>
                <p className='sc-left'>New Order</p>
                <p className='sc-right'>3</p>
            </div>

            <div className='subh-comp'>
                <p className='sc-left'>Accepted</p>
                <p className='sc-right'>3</p>
            </div>

            <div className='subh-comp'>
                <p className='sc-left'>Cooking</p>
                <p className='sc-right'>3</p>
            </div>


            <div className='subh-comp'>
                <p className='sc-left'>Parcel Ready</p>
                <p className='sc-right'>3</p>
            </div>


            <NavLink to='/' className='subh-comp' onClick={()=>{
                dispatch(ShowSideNav(false))
            }}>
            {({isActive})=>(
                <>
                 <p className={ isActive ?'sc-left sc-blue' :'sc-left'}>Delivered</p>
                <p className='sc-right'>3</p>
                </>
               
            )}
                
            </NavLink>

            <NavLink to='/completed' className='subh-comp' onClick={()=>{
                dispatch(ShowSideNav(false))
            }}>
            {({isActive})=>(
                <>
                 <p className={ isActive ?'sc-left sc-blue' :'sc-left'}>Completed</p>
                <p className='sc-right'>3</p>
                </>
               
            )}
            </NavLink>


        </div>
        
    </div>
  )
}

export default SideNav