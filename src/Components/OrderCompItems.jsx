import React from 'react'

function OrderCompItems() {
  return (
    <div className='order-comp-items'>
        <p className='oct-header'>Ordered<br/> Items</p>

        {/* ordered Items */}
        <div className='ordered-items'>
            {/* Ordered Items comp */}
            <div className='order-item-comp'>
                <p>Paneer Tikka Masala</p>
                <p>X1</p>
            </div>

            {/* Ordered Items comp */}
            <div className='order-item-comp'>
                <p> Tawa Butter Roti   </p>
                <p>X1</p>
            </div>

            {/* Ordered Items comp */}
            <div className='order-item-comp'>
                <p>Padpad</p>
                <p>X1</p>
            </div>
        </div>
        
    </div>
  )
}

export default OrderCompItems