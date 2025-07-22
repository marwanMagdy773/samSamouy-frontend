import React from 'react';

const CoachSection = () => {
  return (
    <section id="coach" style={{ backgroundColor: 'var(--white-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '50px', alignItems: 'center' }}>
        <img src="https://i.ibb.co/prQ7Hcvq/Samouy-Landing-page-pic.jpg" alt="صورة كوتش سام ساموي" style={{ width: '100%', maxWidth: '350px', borderRadius: '10px' }} />
        <div>
          <h2 style={{ textAlign: 'right' }}>تعرف على مدربك وفريق العمل</h2>
          <p>بأكثر من 15 سنة خبرة، وشهادة معتمدة من المعهد العالمي ISSA، قدر ساموي يحقق تأثير حقيقي في حياة الآلاف حول العالم. عملاءه حصدوا أكتر من 300 ميدالية دولية، وده خلاه من أبرز وأقوى المدربين في الشرق الأوسط.</p>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
