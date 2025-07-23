import React, { useState, useEffect, useRef } from 'react';
import '../Transformation.css';

const images = [
  '/images/trans3.jpg',
  '/images/trans4.jpg',
  '/images/trans5.jpg',
  '/images/trans6.jpg',
];

const Transformation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(90);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Adjust width on resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSlideWidth(100);
      } else {
        setSlideWidth(70);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 20;
    if (distance > threshold) {
              prevSlide(); // swipe right

    } else if (distance < -threshold) {
      nextSlide(); // swipe left

    }
  };

  return (
    <section className="transformation-section">
      <h2 className="section-title">تحولات ملهمة</h2>

      <div
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider"
          style={{
            transform: `translateX(${currentIndex * slideWidth}vw)`,
            width: `${images.length * slideWidth}vw`,
            maxWidth: `${images.length * 900}px`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>

        {/* أزرار تختفي تلقائيًا في الموبايل */}
        <button className="nav-button prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Transformation;
