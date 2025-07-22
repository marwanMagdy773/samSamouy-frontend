import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution">
      <div className="container">
        <h2 className="section-headline">ما يميز طريقة سام ساموي</h2>
        <p className="section-subheadline">لهذا السبب طريقتنا تحقق نتائج حقيقية حيث يفشل الآخرون.</p>
        <div className="three-column-grid">
          <div className="grid-item">
            <div className="icon">🎯</div>
            <h3>خطط مخصصة 100% ليك</h3>
            <p>كل دايت وتمرين بيتفصل حسب جسمك, هدفك, ولو كنت بتعاني من أي اصابة - حالة طبية علشان يكون مناسب ليك لتحقيق افضل النتايج</p>
          </div>
          <div className="grid-item">
            <div className="icon">🤸</div>
            <h3>مرونة تناسب حياتك اليومية</h3>
            <p>أنظمة بتتظبط على طبيعة يومك سواء كنت مشغول، بتشتغل طول الوقت أو حياتك سريعة.وكمان بنراعى تفضيلاتك في الأكل و مكان و عدد ايام التمرين علشان تلتزم براحتك ومن غير ملل.</p>
          </div>
          <div className="grid-item">
            <div className="icon">💬</div>
            <h3>دعم مستمر ومتابعة شخصية</h3>
            <p>تواصل مباشر مع المدربيين + فريق المتخصصيصن جاهزين يساعدوك في أي وقت.</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#packages-section" className="section-cta-button">ابدأ تغييرك الآن</a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
