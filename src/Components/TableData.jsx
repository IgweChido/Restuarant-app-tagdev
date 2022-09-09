import React from 'react'
import WordBoxComp from './WordBoxComp'

function TableData(props) {
  return (
    <div className='table-data-main'>
    {/* table data comp */}
    <div className='table-data-comp'>
        {/* checkbox rec */}
        <div className='check-box'></div>

       

            {/* Order number */}
            <div className='order-num'>
                <p>#985685</p>
            </div>

            {/* Date & Time */}
            <div className='date'>
                <p>01/01/2020 at 2:14 Pm</p>
            </div>

            {/* Amount */}
            <div className='amount'>
                <p>$400</p>
                <WordBoxComp word={props.word}/>
            </div>

            {/* Payment */}
            <div className='pay'>
                <p>Paid</p>
            </div>

            {/* customer ratings */}
            <div className='customer-rat'>
                <div className='cr-box'>
                    <p>2.5</p>
                </div>
                <p>Read Review</p>
            </div>
        
    </div>

    {/* line */}
    <div className='td-comp-line'></div>
</div>
  )
}

export default TableData