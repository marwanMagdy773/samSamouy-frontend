import React, { useState } from 'react';
import { trackEvent } from '../analytics'; // تأكد من المسار حسب المشروع عندك

const PackagesSection = ({ onOpenModal }) => {
  const packagesData = [
    {
      id: 1,
      title: 'Momentum Starter',
      subtitle: 'بداية الانطلاق',
      description: 'مثالية للي بيحب يبدأ بنفسه ومحتاج خطة احترافية يتبعها باستقلالية.',
      features: [
        'برنامج تمرين وتغذية مخصص بالكامل',
        'خطة PDF احترافية مع لينكات فيديو للتمارين',
        'دعم على الواتساب من فريق المدربين',
      ],
      excludedFeatures: [
        'مدرب خاص ليك',
        'مكالمات فيديو فردية للمتابعة',
        'وصول مباشر لكوتش ساموي',
      ],
      pricesUSD: {
        '1': 21,
        '3': 58,
        '6': 105,
      },
    },
    {
      id: 2,
      title: 'Elite Transformation',
      subtitle: 'التحول المتكامل',
      description: 'للجادين اللي عايزين التزام كامل ومتابعة شخصية ومكثفة عشان يضمنوا تحقيق أفضل النتائج.',
      features: [
        'كل مميزات باقة Momentum Starter',
        'مدرب خاص ليك لمتابعتك خطوة بخطوة',
        'مكالمة فيديو 15 دقيقة أسبوعياً مع مدربك الخاص',
      ],
      excludedFeatures: ['وصول مباشر لكوتش ساموي'],
      pricesUSD: {
        '1': 53,
        '3': 147,
        '6': 268,
      },
      popular: true,
    },
  ];

  const currencies = {
    EGP: { symbol: 'ج.م ', rate: 47.5 },
    USD: { symbol: '$', rate: 1 },
    SAR: { symbol: 'ر.س ', rate: 3.75 },
    AED: { symbol: 'د.إ ', rate: 3.67 },
  };

  const [selectedCurrencies, setSelectedCurrencies] = useState({
    1: 'EGP',
    2: 'EGP',
  });

  const [selectedDurations, setSelectedDurations] = useState({
    1: '1',
    2: '1',
  });

  const calculatePrice = (pkg) => {
    const duration = selectedDurations[pkg.id];
    const currency = selectedCurrencies[pkg.id];
    const priceUSD = pkg.pricesUSD[duration];
    const rate = currencies[currency].rate;
    const priceLocal = priceUSD * rate;
    return priceLocal;
  };

  const handleCurrencyChange = (pkgId, e) => {
    setSelectedCurrencies(prev => ({ ...prev, [pkgId]: e.target.value }));
  };

  const handleDurationChange = (pkgId, duration) => {
    setSelectedDurations(prev => ({ ...prev, [pkgId]: duration }));
  };

  const handlePaymentClick = (pkg) => {
    const selectedInfo = {
      id: pkg.id,
      title: pkg.title,
      duration: selectedDurations[pkg.id],
      currency: selectedCurrencies[pkg.id],
      price: Number(calculatePrice(pkg)),
      currencySymbol: currencies[selectedCurrencies[pkg.id]].symbol,
    };

    // Send tracking event
    trackEvent(
      'Package CTA',
      `Clicked ${pkg.title} - ${selectedInfo.duration} month(s)`,
      `Currency: ${selectedInfo.currency} | Price: ${selectedInfo.price} | Popular: ${!!pkg.popular}`
    );

    // Trigger modal
    onOpenModal(selectedInfo);
  };

  return (
    <section id="packages-section">
      <div className="container">
        <h2 className="section-headline">اختر الباقة اللي هتوصلك لهدفك</h2>
        <p className="section-subheadline">نجعل مقارنة الميزات واختيار طريقك نحو النتائج أمراً سهلاً.</p>

        <div className="pricing-table">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className={`package${pkg.popular ? ' highlight' : ''}`}>
              {pkg.popular && <div className="popular-badge">الأكثر اختياراً</div>}
              <h3 className="package-title">{pkg.title}<br />({pkg.subtitle})</h3>
              <p className="package-target">{pkg.description}</p>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
                {pkg.excludedFeatures.map((exFeature, idx) => (
                  <li key={`ex${idx}`} className="excluded">{exFeature}</li>
                ))}
              </ul>

              <div className="pricing-module">
                <div className="duration-selector">
                  {Object.keys(pkg.pricesUSD).map((duration) => (
                    <button
                      key={duration}
                      className={`duration-option${selectedDurations[pkg.id] === duration ? ' active' : ''}`}
                      onClick={() => handleDurationChange(pkg.id, duration)}
                    >
                      {duration === '1' ? 'شهر واحد' : `${duration} شهور`}
                    </button>
                  ))}
                </div>

                <div className="price-display-area">
                  <span className="price-label">السعر الإجمالي:</span>
                  <div className="price-value-container">
                    <span className="price-value">{calculatePrice(pkg)}</span>
                    <span className="currency-symbol">{currencies[selectedCurrencies[pkg.id]].symbol}</span>
                    <span className="duration-text">(لمدة {selectedDurations[pkg.id]} {selectedDurations[pkg.id] === '1' ? 'شهر واحد' : 'شهور'})</span>
                  </div>

                  <div className="currency-selector-container">
                    <label htmlFor={`currency-selector-${pkg.id}`}>:العملة</label>
                    <select
                      id={`currency-selector-${pkg.id}`}
                      className="currency-selector"
                      value={selectedCurrencies[pkg.id]}
                      onChange={(e) => handleCurrencyChange(pkg.id, e)}
                    >
                      {Object.entries(currencies).map(([code, { symbol }]) => (
                        <option key={code} value={code} data-symbol={symbol}>{code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  className="cta-button payment-button"
                  onClick={() => handlePaymentClick(pkg)}
                >
                  {pkg.popular ? 'اختار الباقة دي' : 'احجز الآن'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
