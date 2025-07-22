import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="contact-text">
          <strong>للاستفسارات:</strong>{' '}
          <a
            href="https://wa.me/+201093043865"
            className="whatsapp-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} className="whatsapp-icon" />
            +20 109 304 3865
          </a>
        </p>

        <div className="footer-links">
          <a href="#">وسائل التواصل</a>
          <span>|</span>
          <a href="#">شروط الخدمة</a>
          <span>|</span>
          <a href="#">سياسة الخصوصية</a>
        </div>

        <p className="copyright">
          &copy; {currentYear} سام ساموي. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
