import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css'

export function TareaFormulario(props) {
  return (
    <form className='tarea-formulario'>
      <input 
       className='tarea-input'
       type='text'
       placeholder='Escribe una Tarea'
       name='texto'
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}