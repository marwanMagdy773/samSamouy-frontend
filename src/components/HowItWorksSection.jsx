import React from 'react';
import { trackEvent } from '../analytics'; // تأكد من المسار الصحيح

const HowItWorksSection = () => {
  const handleCTAClick = () => {
    trackEvent('How It Works Section', 'خد الخطوة الخاصه بيك دلوقتي ', 'CTA - How It Works Section');
  };

  return (
    <section id="how-it-works" style={{ backgroundColor: 'var(--white-color)' }}>
      <div className="container">
        <h2 className="section-headline">الطريق البسيط نحو النتائج</h2>
        <p className="section-subheadline">احترافية، واضحة، ومصممة خصيصاً لنجاحك.</p>
        <div className="step-by-step-graphic">
          <div className="step">
            <div className="step-number">1</div>
            <h3>ابعتلنا تفاصيلك</h3>
            <p>املأ استبياننا المفصل بعد اختيار الباقة المناسبة لك.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>استلم خطتك المتفصلة عليك</h3>
            <p>استلم خطة التغذية والتمارين المخصصة لك بالكامل في غضون ٣ ايام عمل.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>ابدأ رحلتك بمتابعة كاملة مننا</h3>
            <p>ابدأ رحلة تحولك مع مدربك الذي يقدم لك الدعم والتحفيز المستمر.</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#packages-section"
            className="section-cta-button"
            onClick={handleCTAClick}
          >
خد الخطوة الخاصه بيك 
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
