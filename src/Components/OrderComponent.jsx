import React from 'react'
import '../Styles/OrderComponent.css'
import OrderCompAddInfo from './OrderCompAddInfo'
import OrderCompHead from './OrderCompHead'
import OrderCompItems from './OrderCompItems'

function OrderComponent() {
  return (
    <div className='order-comp'>
      {/* scroll container */}
      <div className='oc-scroll'>
        <OrderCompHead/>
        <OrderCompItems/>
        <OrderCompAddInfo/>
      </div>
        

    </div>
  )
}

export default OrderComponent