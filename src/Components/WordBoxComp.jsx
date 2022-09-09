import React from 'react'
import '../Styles/OrderComponent.css'

function WordBoxComp(props) {

   
  return (
    <div className={props.word === 'ONLINE'? 'ohc-f-right' :'ohc-f-right1'}>
        
         <p>{props.word}</p>
    </div>
  )
}

export default WordBoxComp