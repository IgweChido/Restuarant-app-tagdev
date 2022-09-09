import React from 'react'

import '../Styles/Delivered.css'
import '../Styles/Completed.css'
import CompletedHead from './CompletedHead'
import CompletedTable from './CompletedTable'

function Completed() {
  return (
    <div className='completed'>
        <CompletedHead/>
        <CompletedTable/>

    </div>
  )
}

export default Completed