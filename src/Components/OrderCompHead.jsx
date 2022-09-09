import React from 'react'
import WordBoxComp from './WordBoxComp'

function OrderCompHead() {
  return (
    <div className='order-head'>

        {/* order no */}
        <div className='oh-comp'>
            <p className='ohc-p1'>Order Number</p>
            <p className='ohc-p2'>#988123</p>
        </div>

         {/* order no */}
         <div className='oh-comp'>
            <p className='ohc-p1'>Date & Time</p>
            <p className='ohc-p2'>01/01/2020 at 2:14Pm</p>
        </div>

         {/* order no */}
         <div className='oh-comp'>
            <p className='ohc-p1'>Amount</p>
            <div className='ohc-flex'>
                 <p className='ohc-p2'>#988123</p>
                 <WordBoxComp word='COD'/>
            </div>
           
        </div>
        
    </div>
  )
}

export default OrderCompHead