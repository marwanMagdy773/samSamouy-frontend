import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="main-headline">زهقت من الأنظمة المملة و النتايج البطيئة ومبتوصلش لهدفك؟</h1>
        <p className="solution-subheadline">ده وقت التغيير الحقيقي مع برامجنا الاكثر مبيعا في الشرق الاوسط !</p>
        <a href="#packages-section" className="cta-button">ابدأ تغييرك دلوقتي</a>
      </div>
    </section>
  );
};

export default HeroSection;
