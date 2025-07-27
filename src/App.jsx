import React, { useState } from 'react';

import HeroSection from './components/HeroSection.jsx';
import SolutionSection from './components/SolutionSection.jsx';
import HowItWorksSection from './components/HowItWorksSection.jsx';
import CoachSection from './components/CoachSection.jsx';
import CompanyInfoSection from './components/CompanyInfoSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import PackagesSection from './components/PackagesSection.jsx';
import VIPPackages from './components/VIPPackages.jsx';
import FinalCTASection from './components/FinalCTASection.jsx';
import Footer from './components/Footer.jsx';
import SubscriptionModal from './components/SubscriptionModal.jsx';
import TransformationSection from './components/transformationSection.jsx';
import TransformationVideosSection from './components/transformationVidoesSection.jsx';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackageInfo, setSelectedPackageInfo] = useState(null);

  const openModal = (packageInfo) => {
    setSelectedPackageInfo(packageInfo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackageInfo(null);
  };

  const handleSubscriptionSubmit = (formData) => {
    console.log('Subscription data:', formData, selectedPackageInfo);
    alert(`شكراً لك يا ${formData.userName} على الاشتراك في باقة "${selectedPackageInfo?.title || 'غير معروفة'}"!\nسيتم التواصل معك قريباً.`);
    closeModal();
  };

  return (
    <>
      <HeroSection />
      <TransformationSection/>
      <TransformationVideosSection />
      <SolutionSection />
  
      <HowItWorksSection />
    

      <CoachSection />
      <CompanyInfoSection />
      <FAQSection />
      <PackagesSection onOpenModal={openModal} />
      <VIPPackages />
      <FinalCTASection />
      <Footer />

      <SubscriptionModal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubscriptionSubmit}
        selectedPackage={selectedPackageInfo}
      />
    </>
  );
};

export default App;
