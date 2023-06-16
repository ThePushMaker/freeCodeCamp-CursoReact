import React, {useState} from "react";
import { TareaFormulario } from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import { Tarea } from '../componentes/Tarea';

export function ListaDeTareas () {

  const [ tareas, setTareas ] = useState([]);


  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) => 
          <Tarea 
            texto={tarea.texto}
            completada={tarea.completada}
          />
          )
        }
        Lista
         {/* <Tarea texto='Aprender React' /> */}
      </div>
    </>
  );
} 