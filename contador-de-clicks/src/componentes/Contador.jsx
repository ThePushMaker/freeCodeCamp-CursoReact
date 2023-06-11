import React from 'react';
import '../hojas-de-estilos/Contador.css'

export function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}