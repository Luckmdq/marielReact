import React from 'react';
import {Accordion} from "./components/acordeon";
import {ImageSlider} from './components/ImageSlider';
const proyecto="brewhouse";
const nombre="animacion";
const host="http://localhost:5174"
const pathImg=`${host}/img/${proyecto}/${nombre}.jpg`;

/* vector con distintos tipo de secciones */
const seccionesHistoria = ["Que hago", "Un poco de historia", "Profesionalmente",];
const seccionesProyectos=["brewHouse", "cima", "contructoraArgentina", "incantarte", "usina"]

const slides = [
  { url: `${pathImg}`, title: `${nombre}` },
  { url: "http://localhost:5174/img/brewhouse/envaseNovedoso.jpg", title: "boat" },
  { url: "http://localhost:5174/img/brewhouse/envase.jpg", title: "boat" },
  { url: "http://localhost:5174/img/brewhouse/foodtruck.jpg", title: "boat" },
  { url: "http://localhost:5174/img/brewhouse/isotipo-ori.jpg", title: "boat" },
];

export default function App() {
  
  return (
    <>
    {
      <Accordion sections={seccionesHistoria} />
    }
    {/* cada proyecto */}
    {
      <section className='mx-auto w-[500px] h-[280px] ' >
        <ImageSlider 
          slides={slides} 
          parentWidth={500}
        />
        { 
          <Accordion sections={seccionesProyectos}/>
        }
      </section>
    }
    </>
  )
}