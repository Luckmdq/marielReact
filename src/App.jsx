import React from 'react';
import {Accordion} from "./components/acordeon";
import Carousel from "./components/Carousel";

const proyecto="brewhouse";
const nombre="animacion";
const host="http://localhost:5174"
const pathImg=`${host}/img/${proyecto}/${nombre}.jpg`;

/* vector con distintos tipo de secciones */
const seccionesHistoria = ["Que hago", "Un poco de historia", "Profesionalmente",];
const seccionesProyectos=["brewHouse", "cima", "contructoraArgentina", "incantarte", "usina"]

const slides = [
  pathImg, "http://localhost:5174/img/brewhouse/envaseNovedoso.jpg", "http://localhost:5174/img/brewhouse/envase.jpg", "http://localhost:5174/img/brewhouse/foodtruck.jpg", "http://localhost:5174/img/brewhouse/isotipo-ori.jpg"];

export default function App() {
  
  return (
    <>
    {
      <Accordion sections={seccionesHistoria} />
    }
    {/* cada proyecto */}
    {
		<>
		
		
		{/* cada elemento del carrosul junto a todos los acordiones
			<div className="relative">
				<div className="max-w-lg mx-auto">
					<Carousel>
						{slides.map(imagen=> (
							<img src={imagen}></img>
						))}
					</Carousel>
					<Accordion sections={seccionesProyectos}/>
				</div>
			</div> */}
		</>
    }
    </>
  )
}