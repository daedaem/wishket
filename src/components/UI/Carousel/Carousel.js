import { useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.css";
import CarouselButtonIcon from "./CarouselButtonIcon";

const Carousel = ({ imageList }) => {
  const Total_Slide = imageList.length - 1;
  const [currentIdx, setCurrentIdx] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s erase-in-out";
    slideRef.current.style.transform = `translateX(-${currentIdx}00%)`;
  }, [currentIdx]);

  const nextSlide = () => {
    if (currentIdx >= Total_Slide) {
      setCurrentIdx((prev) => Total_Slide);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIdx === 0) {
      setCurrentIdx((prev) => 0);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className={classes.container}>
        {0 < currentIdx && (
          <button className={classes.prevButton} onClick={prevSlide}>
            <CarouselButtonIcon />
          </button>
        )}
        {currentIdx < Total_Slide && (
          <button className={classes.rightButton} onClick={nextSlide}>
            <CarouselButtonIcon />
          </button>
        )}

        <div className={classes.sliderContainer} ref={slideRef}>
          {imageList.map((el, idx) => {
            return (
              <img
                className={classes.sliderContainer}
                key={idx}
                src={`${el.image}`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Carousel;
