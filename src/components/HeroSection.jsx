import React from 'react';
import { trackEvent } from '../analytics'; // عدل المسار حسب مكان الملف

const HeroSection = () => {
  const handleCTAClick = () => {
    trackEvent('Hero Section', 'ابدأ تغييرك دلوقتي', 'ابدأ تغييرك دلوقتي');
  };

  return (
    <section id="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="main-headline">زهقت من الأنظمة المملة و النتايج البطيئة ومبتوصلش لهدفك؟</h1>
        <p className="solution-subheadline">ده وقت التغيير الحقيقي مع برامجنا الاكثر مبيعا في الشرق الاوسط !</p>
        <a href="#packages-section" className="cta-button" onClick={handleCTAClick}>
          ابدأ تغييرك دلوقتي
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
