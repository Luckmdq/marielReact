import { useState } from "react";
import {dataTextos} from '../data/dataHistoria';
import {FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa/index.esm';


const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <>
      <section className=" border-b-8 border-blue-50 cursor-pointer bg-indigo-400 text-emerald-700 flex items-center justify-between p-4"  onClick={toggleSection}>
        <h2>{section.title}</h2>
        <spam>{isActiveSection ? <FaArrowCircleUp /> : <FaArrowCircleDown />}</spam>
      </section>
      {isActiveSection && (
        <section  className=" p-2 grid grid-cols-1 gap-3" >
          {dataTextos.filter(dato=>dato.seccion===section.title).map(filtrado=>(
            <hgroup>
              <h2 className="text-center">
                {filtrado.title}
              </h2>
              <p className="text-center">
                {filtrado.contenido}
              </p>
            </hgroup>
          ))}
        </section>
      )}
    </>
  );
};

export const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <article>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
        ))}
    </article>
  );
};
