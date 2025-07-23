import React, { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';

const VIPPackages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <section id="packages-section">
      <div className="container">
        <div className="pricing-table">
          <div className="package">
            <h3 className="package-title">
              Samouy VIP Concierge<br />(تجربة VIP مع كوتش ساموي)
            </h3>
            <p className="package-target">
              أعلى مستوى من الخدمة الحصرية والوصول المباشر لكوتش ساموي للي عايزين أفضل تجربة ممكنة.
            </p>
            <ul className="package-features">
              <li><strong>كل مميزات باقة Elite Transformation</strong></li>
              <li>وصول مباشر على الواتساب لكوتش ساموي</li>
              <li>تعديلات على الخطة عند الحاجة من كوتش ساموي شخصياً</li>
              <li>مكتبة فيديوهات حصرية</li>
            </ul>

            <div className="vip-sub-packages">
              <div className="vip-tier">
                <h4>المستوى الأول: وصول ذو أولوية</h4>
                <div className="package-price" style={{ fontSize: '1.8em' }}>10,000 جنيه / شهرياً</div>
                <button
                  className="cta-button payment-button"
                  onClick={() =>
                    handleOpenModal({
                      title: 'VIP المستوى الأول',
                      price: 10000,
                      currencySymbol: 'EGP',
                      duration: '1',
                    })
                  }
                >
                  احجز الآن
                </button>
              </div>

              <div className="vip-tier">
                <h4>المستوى الثاني: وصول شامل وتدريب شخصي</h4>
                <p style={{ textAlign: 'center' }}>
                  + مكالمتين فيديو (15 دقيقة) شهرياً مع كوتش ساموي شخصياً
                </p>
                <div className="package-price" style={{ fontSize: '1.8em' }}>15,000 جنيه / شهرياً</div>
                <button
                  className="cta-button payment-button"
                  onClick={() =>
                    handleOpenModal({
                      title: 'VIP المستوى الثاني',
                      price: 15000,
                      currencySymbol: 'EGP',
                      duration: '1',
                    })
                  }
                >
                  احجز الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default VIPPackages;
