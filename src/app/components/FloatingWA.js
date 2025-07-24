'use client';

import Image from 'next/image';

const FloatingWA = () => {
  const openWA = () => {
    window.open(
      'https://api.whatsapp.com/send/?phone=6281390002633&text&type=phone_number&app_absent=0',
      '_blank'
    );
  };

  return (
    <Image
      onClick={openWA}
      title="Hubungi via WhatsApp"
      className="zoom-image floating floating-right"
      src="/whatsapp.webp"
      alt="WhatsApp PT Mitra Jaya Raya"
      width={60}
      height={60}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        cursor: 'pointer',
      }}
    />
  );
};

export default FloatingWA;
