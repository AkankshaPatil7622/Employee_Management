import React from 'react'
import '../styles/card.css'
function Cards({cardName, }) {
  return (
    <div className='card'>
        <h2>{cardName}</h2>
    </div>
  )
}

export default Cards