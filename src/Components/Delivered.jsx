import React from 'react'
import '../Styles/Delivered.css'
import DeliveredHead from './DeliveredHead'
import OrderComponent from './OrderComponent'

function Delivered() {
  return (
    <div className='delivered'>
        <DeliveredHead/>
        <OrderComponent/>
        <OrderComponent/>

    </div>
  )
}

export default Delivered