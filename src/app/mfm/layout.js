export const metadata = {
  title: 'MFM (Melamine Faced MDF) | PT. Mitra Jaya Raya',
  description: 'MFM adalah MDF yang dilapisi melamin berkualitas tinggi, cocok untuk kebutuhan furnitur modern, dinding partisi, dan desain interior dengan tampilan elegan.',
  keywords: 'MFM, Melamine Faced MDF, MDF laminasi, kayu melamin, papan MFM, MDF pelapis melamin, Mitra Jaya Raya',
  openGraph: {
    title: 'MFM (Melamine Faced MDF) | PT. Mitra Jaya Raya',
    description: 'Produk MFM dari PT. Mitra Jaya Raya — papan MDF dengan pelapis melamin yang tahan lama dan estetis untuk berbagai kebutuhan interior.',
    url: 'https://mitrajayaraya.com/mfm',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/mfm-kayu-olahan.jpg', // Ganti sesuai nama gambar jika berbeda
        width: 800,
        height: 600,
        alt: 'MFM Kayu Olahan Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MFM (Melamine Faced MDF) | PT. Mitra Jaya Raya',
    description: 'Temukan MFM berkualitas dari PT. Mitra Jaya Raya, ideal untuk aplikasi furnitur dengan tampilan elegan dan daya tahan tinggi.',
    images: ['/mfm-kayu-olahan.jpg'],
  },
};


const MfmLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default MfmLayout;