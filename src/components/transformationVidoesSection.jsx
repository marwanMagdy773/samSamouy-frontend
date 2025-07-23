import React from 'react';
import '../TransformationVideosSection.css';

const TransformationVideosSection = () => {
  return (
    <section className="transformation-section">
      <h2 className="section-title">شاهد التحول</h2>
      <div className="video-container">
        <video
          className="video-player"
          controls
          poster="/images/image.png" 
            style={{ width: '100%', height: '100%' }}
        >
          <source src="videos/ALI DRAFT WITH CAPTIONS.mp4" type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو.
        </video>
      </div>
    </section>
  );
};

export default TransformationVideosSection;
