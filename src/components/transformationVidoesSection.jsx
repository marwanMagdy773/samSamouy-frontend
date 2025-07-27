import React, { useState, useEffect, useRef } from 'react';
import '../TransformationVideosSection.css';

const videos = [
  '/videos/AHMED DRAFT WITH CAPTIONS.mp4',
  '/videos/ALI DRAFT WITH CAPTIONS.mp4',
  '/videos/LOUAI DRAFT WITH CAPTIONS.mp4',
];

const TransformationVideosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(90);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);


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
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
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
      <h2 className="section-title">شاهد تحولات ابطالنا </h2>

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
            width: `${videos.length * slideWidth}vw`,
            maxWidth: `${videos.length * 900}px`,
          }}
        >
          {videos.map((videoSrc, index) => (
            <div className="slide" key={index}>
              <video
                src={videoSrc}
                controls
                muted
                playsInline
                preload="metadata"
                poster='/images/image.png'
                // turn off full screen 
                

              ></video>
            </div>
          ))}
        </div>

        <button className="nav-button prev" onClick={prevSlide}>
          ❯
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          ❮
        </button>
      </div>

      <div className="dots">
        {videos.map((_, index) => (
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

export default TransformationVideosSection;
