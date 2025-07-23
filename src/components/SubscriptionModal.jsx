// SubscriptionModal.jsx
import React, { useState } from 'react';

const SubscriptionModal = ({ isOpen, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/payment/easykash-link', {  // الراوت اللي طلبته
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedPackage.price,
          currency: selectedPackage.currencySymbol,  // مثلا 'EGP' أو 'USD'
          paymentOptions: [1, 2, 3],  // عدل حسب خيارات الدفع عندك
          cashExpiry: 1800, // 30 دقيقة (اختياري)
          name: formData.userName,
          email: formData.userEmail,
          mobile: formData.userPhone,
          customerReference: Date.now(), // رقم فريد مؤقت، الأفضل من السيرفر
        }),
      });

      const data = await response.json();

      if (data.redirectUrl || data.paymentUrl) {
        window.location.href = data.redirectUrl || data.paymentUrl;  // توجيه المستخدم لصفحة الدفع
      } else {
        alert('حدث خطأ في إنشاء طلب الدفع.');
      }
    } catch (error) {
      alert('فشل الاتصال بالسيرفر.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="subscription-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h3>الاشتراك في البرنامج</h3>

        {selectedPackage && (
          <div style={{ marginBottom: '1rem' }}>
            <strong>الباقة المختارة:</strong> {selectedPackage.title} <br />
            <strong>المدة:</strong> {selectedPackage.duration} {selectedPackage.duration === '1' ? 'شهر' : 'شهور'} <br />
            <strong>السعر:</strong> {selectedPackage.price} {selectedPackage.currencySymbol}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="userName"
            placeholder="الاسم"
            required
            value={formData.userName}
            onChange={handleChange}
          />
          <input
            type="tel"
            id="userPhone"
            placeholder="رقم الهاتف"
            required
            value={formData.userPhone}
            onChange={handleChange}
          />
          <input
            type="email"
            id="userEmail"
            placeholder="الإيميل"
            required
            value={formData.userEmail}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'جاري الإرسال...' : 'اشترك الآن'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;
