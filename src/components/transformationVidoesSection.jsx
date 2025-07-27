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

  useEffect(() => {
    const videoElements = document.querySelectorAll('.slide video');
    videoElements.forEach((vid, idx) => {
      if (idx !== currentIndex) {
        vid.pause();
      }
    });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="transformation-section">
      <h2 className="section-title">شاهد تحولات أبطالنا</h2>

      <div
        className="slider-container"
        ref={sliderRef}
        // تم حذف onTouchStart, onTouchMove, onTouchEnd لتوقف دعم السوايب
      >
        <div
          className="slider"
          style={{
            transform: `translateX(${currentIndex * slideWidth}vw)`, // لاحظ السالب هنا لتحريك السلايدر لليسار
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
                poster="/images/image.png"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              />
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
          />
        ))}
      </div>
    </section>
  );
};

export default TransformationVideosSection;
