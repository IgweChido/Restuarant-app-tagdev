import React from 'react'
import TableData from './TableData'
import WordBoxComp from './WordBoxComp'

function CompletedTable() {
  return (
    <div className='completed-table'>
      {/* scroll area */}
      <div className='scroll-area'>
        {/* table head  */}
        <div className='ct-head'>
            <p className='cth-orderNum'>Order Number</p>
            <p className='cth-date'>Date & Time</p>
            <p className='cth-amount'>Amount</p>
            <p className='cth-pay'>Payment</p>
            <p className='cth-rate'>Customer Ratings</p>
           
        </div>

        {/* Tableline */}
        <div className='table-line'></div>

        {/* Table body */}
        <div className='table-body'>
            {/* table data main */}
           <TableData word='ONLINE'/>
           <TableData word='COD'/>
           <TableData word='ONLINE'/>
           <TableData word='COD'/>
           
            
        </div>
      </div>
        
    </div>
  )
}

export default CompletedTable