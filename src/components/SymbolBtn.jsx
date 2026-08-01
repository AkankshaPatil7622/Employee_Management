import React from 'react'
import '../styles/SymbolBtn.css';

function SymbolBtn({symbol, clickHandle}) {
  return (
    <button onClick={clickHandle}>
      {symbol}
    </button>
  )
}

export default SymbolBtn