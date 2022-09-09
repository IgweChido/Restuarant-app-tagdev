import React from 'react'
import '../Styles/OrderComponent.css'

function OrderCompAddInfo() {
  return (
    <div className='ordercomp-addinfo'>
        <p className='oa-p1'>Additional information from customer</p>
        <p className='oa-p2'>Please send salad and green chantni with 2 paper dish.</p>

        {/* delivery details */}
        <div className='deliv-dets'>

            {/* Delivery boy details */}
            <div className='deliv-boy'>
                <p className='db-head'>Delivery boy Details</p>

                <div className='db-body'>
                    {/* one */}
                    <div className='db-one'>
                        <p className='dbo-top'>Name</p>
                        <p className='dbo-bottom'>Rutvik Jolapara</p>
                    </div>

                    {/* line */}
                    <div className='db-line'></div>

                    {/* two */}
                    <div className='db-one'>
                        <p className='dbo-top'>Contact Number</p>
                        <p className='dbo-bottom'>98745 63211</p>
                    </div>
                </div>
            </div>



            {/* Delivery status */}
            <div className='deliv-boy'>
                <p className='db-head'>Delivery Status</p>

                <div className='db-body'>
                    {/* one */}
                    <div className='db-one'>
                        <p className='dbo-top'>Collected Parcel</p>
                        <p className='dbo-bottom'>4:14pm</p>
                    </div>

                    {/* line */}
                    <div className='db-line'></div>

                    {/* two */}
                    <div className='db-one'>
                        <p className='dbo-top'>Delivered To Customer</p>
                        <p className='dbo-bottom'>On the Way</p>
                    </div>

                    {/* line */}
                    <div className='db-line'></div>

                    {/* two */}
                    <div className='db-one'>
                        <p className='dbo-top'>Customer Rating</p>
                        <div className='dbo-flexx'>
                            <p className='dbo-bottom'>3.5 </p>
                            <p className='dbob-blue'>view & ratings</p>
                        </div>
                        
                    </div>
                </div>
            </div>



        </div>
        

    </div>
  )
}

export default OrderCompAddInfo