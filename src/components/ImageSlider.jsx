import { useCallback, useEffect, useRef, useState } from "react";
import {FaArrowRight,FaArrowLeft, FaRegEye, FaEye} from 'react-icons/fa/index.esm';

export const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="relative h-[100%]" >
      <div onClick={goToPrevious} 
        className=" absolute top-[50%] left-[32px] text-cyan-400 text-4xl z-10 cursor-pointer" >
        <FaArrowLeft />
      </div>
      <div onClick={goToNext}
        className="absolute top-[50%] right-[32px] text-cyan-400 text-4xl z-10 cursor-pointer">
        <FaArrowRight />
      </div>
      <div className=" overflow-hidden h-[100%]">
        <div className="flex h-[100%]" 
          style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {slides.map((slideIndex) => (
          <spam
            className="my-0 mx-1  text-cyan-400 cursor-pointer text-4xl"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {(currentIndex === slideIndex) ? <FaRegEye />: <FaEye />}
          </spam>
        ))}
      </div>
    </div>
  );
};