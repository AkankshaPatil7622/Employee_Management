import React from 'react'
import '../styles/Button.css';
function Button({title}) {
  return (
   <>
   <button className='global-btn'>{title}</button>
   </>
  )
}

export default Button;