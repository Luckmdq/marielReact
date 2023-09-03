import React from 'react';
import {Accordion} from "./components/acordeon";
import {Proyecto} from "./components/Proyecto"


/* vector con distintos tipo de secciones */
const seccionesHistoria = ["Que hago", "Un poco de historia", "Profesionalmente",];

export default function App() {
  
  return (
    <>
      <Accordion sections={seccionesHistoria} />
			<Proyecto/>
		</>
  )
}