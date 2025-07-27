import React from 'react';
import { trackEvent } from '../analytics'; 

const CompanyInfoSection = () => {
  const handleJoinClick = () => {
    trackEvent('Company Info Section', 'انضم لعائلتنا الآن', 'CTA - Company Join Button');
  };

  return (
    <section id="company-info">
      <div className="container">
        <h2 className="section-headline">عن الشركة</h2>
        <p>
          سام ساموى هي واحدة من اكبر شركات الشرق الأوسط بهذا المجال. صممنا اكثر من 23,000 خطة لعملائنا في اكثر من 64 دولة حول العالم و غيرنا حياتهم ! قدرنا نشوف نمو كبير لشركتنا من أول يوم، وده خلانا نعرف نفهم كل حالة كأنها حالة خاصة لوحدها وتستاهل اهتمام مخصص ليها.
          نحن نوظف أفضل المدربين، ويتم تدريبهم والإشراف عليهم وتقييمهم بشكل كامل ومباشر من قبل كوتش سام. إحنا معاك خطوة بخطوة.
        </p>
        <div className="text-center">
          <a
            href="#packages-section"
            className="company-btn"
            onClick={handleJoinClick}
          >
            انضم لعائلتنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
