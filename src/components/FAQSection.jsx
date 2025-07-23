import React, { useState } from 'react';
import { trackEvent } from '../analytics'; // تأكد من المسار الصحيح

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'إيه الفرق الأساسي بين الباقات؟',
      answer: (
        <>
          <strong>Momentum Starter</strong> بتديلك الخطة الاحترافية والدعم عشان تبدأ صح. <strong>Elite Transformation</strong> بتضيف مدرب خاص ومكالمات فيديو للمتابعة والالتزام الكامل. <strong>VIP Concierge</strong> بتضمنلك وصول مباشر لكوتش ساموي نفسه لأعلى مستوى من الإشراف والاهتمام الشخصي.
        </>
      )
    },
    {
      question: 'إزاي ممكن أدفع من مصر؟',
      answer: 'متاح الدفع عن طريق فودافون كاش، InstaPay، فوري، أو كروت الدفع البنكية (Credit/Debit Card).'
    },
    {
      question: 'السعر ده اشتراك شهري ولا مرة واحدة؟',
      answer: 'الأسعار المعروضة هي رسوم اشتراك شهري تتجدد حسب مدة الباقة التي تختارها.'
    },
    {
      question: 'كيف يمكنني الدفع من السعودية/الإمارات؟',
      answer: (
        <>
          نقبل الدفع بجميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد) للمدفوعات الدولية.
          <br />
          <a href="https://wa.me/+201093043865" className="whatsapp-button" target="_blank" rel="noopener noreferrer">تواصل معنا على واتساب للمساعدة</a>
        </>
      )
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChoosePackageClick = () => {
    trackEvent('FAQ Section', 'اختر باقتك الآن', 'CTA - FAQ Choose Package Button');
  };

  return (
    <section id="faq" style={{ backgroundColor: 'var(--white-color)' }}>
      <div className="container">
        <h2 className="section-headline">الأسئلة الشائعة</h2>
        <p className="section-subheadline">لقد فكرنا في كل شيء. لم يعد لديك أي أعذار.</p>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: 'pointer' }}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer" style={{ marginTop: '15px', paddingRight: '20px' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        <div className="text-center" style={{ marginTop: '30px' }}>
          <a
            href="#packages-section"
            className="section-cta-button"
            onClick={handleChoosePackageClick}
          >
            اختر باقتك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
