import Carousel from "./Carousel";
import {dataImg} from "../data/dataImagenes";
import {Accordion} from "./acordeon";

const seccionesProyectos=["brew house", "cima-2021", "constructora argentina", "incantarte", "usina"]
const host="http://localhost:5174"

export  const Proyecto=()=>{
	return(
		<article>
			{seccionesProyectos.map(filtro=>(
				<>
				<h2 className='font-bold text-4xl capitalize text-center'>{filtro}</h2>
				<section className="relative">
					<div className="max-w-lg mx-auto">
						{dataImg.filter(filtrado=>filtrado.proyecto===filtro).map(path=>
							<Carousel 
								key={filtro}
								slides={path.nombre}
								carpeta={filtro}
								host={host}
							/> 
						)}
						<Accordion sections={[filtro]} />	
					</div>
				</section>
				</>
			))}
		</article>
	)
};