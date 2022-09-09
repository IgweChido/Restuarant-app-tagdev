import React from 'react'
import ham1 from '../Images/ham1.svg'
import ham2 from '../Images/ham2.svg'
import plusBlack from '../Images/plus-black.svg'
import plusBlue from '../Images/plus-blue.svg'
import hamGray from '../Images/ham-gray.svg'
import equals from '../Images/equals.svg'
import arrowL from '../Images/arrow-left.svg'
import arrowR from '../Images/arrow-right.svg'


function CompletedHead() {
  return (
    <div className='delivered-head'>
        {/* header */}
        <div className='d-header'>
            <img src={ham1} alt=''></img>
            <p>Completed</p>
        </div>

        {/* body */}
        <div className='d-body'>

            {/* show order add filter */}
            <div className='show-add'>

                {/* left side */}
                <div className='d-left-side1'>
                    <div className='ch-box'>
                        {/* arrow left */}
                        <div className='ch-al'>
                            <img src={arrowL} alt=''></img>
                        </div>

                        {/* date */}
                        <div className='ch-date'>
                            <p>1-7 January</p>
                        </div>

                        {/* arrow right */}
                        <div className='ch-ar'>
                            <img src={arrowR} alt=''></img>
                        </div>

                    </div>

                    {/* show order box */}
                     <div className='d-show-order'>
                        <div className='d-order-box'>
                            <img src={ham2} alt=''></img>
                            <p>Showing 10 Orders</p>
                        </div>

                        {/* plus box */}
                        <div className='d-plus-box'>
                            <img src={plusBlack} alt=''></img>
                        </div>
                     </div>

                    {/* add filter */}
                    <div className='d-add-filter'>
                        <img src={plusBlue} alt=''></img>
                        <p>Add Filter</p>
                    </div>
                </div>

                {/* right side */}
                <div className='d-right-side'>
                    {/* box 1 */}
                    <div className='d-box1'>
                        <img src={equals} alt=''></img>
                    </div>

                    {/* box 2 */}
                    <div className='d-box2'>
                        <img src={hamGray} alt=''></img>
                    </div>
                </div>
               
            </div>

        </div>

        {/* line */}
        <div className='dh-line'></div>


    </div>
  )
}

export default CompletedHead