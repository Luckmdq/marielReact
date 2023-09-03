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
				<Accordion sections={[filtro]} />	
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
					</div>
				</section>
				</>
			))}
		</article>
	)
};