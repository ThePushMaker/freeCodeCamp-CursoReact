import React from 'react';
import '../hojas-de-estilo/Boton.css';

export function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  // En react tambien se puede hacer que se muestre una seccion u otra de contenido segun un condicional
  // if(esOperador(props.children)) {
  //   return (
  //     <div className='boton-contenedor operador'
  //     onClick={() => props.manejarClic(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className='boton-contenedor'
  //     onClick={() => props.manejarClic(props.children)}>
  //       {props.children}
  //     </div>
  //   );
  // }

  return (
    <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  );
}