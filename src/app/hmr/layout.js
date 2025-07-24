export const metadata = {
  title: 'HMR (High Moisture Resistance MDF) | PT. Mitra Jaya Raya',
  description: 'HMR (High Moisture Resistance MDF) adalah papan MDF tahan lembab dari PT. Mitra Jaya Raya, cocok untuk area dengan kelembaban tinggi seperti dapur dan kamar mandi.',
  keywords: 'HMR, High Moisture Resistance MDF, MDF tahan lembab, MDF dapur, HMR Indonesia, kayu tahan air, HMR Mitra Jaya Raya, MDF anti lembab',
  openGraph: {
    title: 'HMR (High Moisture Resistance MDF) | PT. Mitra Jaya Raya',
    description: 'Produk MDF tahan lembab berkualitas tinggi dari PT. Mitra Jaya Raya untuk area dengan tingkat kelembaban tinggi.',
    url: 'https://mitrajayaraya.com/hmr',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/hmr-kayu-olahan.jpg', // Pastikan gambar tersedia
        width: 800,
        height: 600,
        alt: 'HMR MDF Tahan Lembab',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HMR (High Moisture Resistance MDF) | PT. Mitra Jaya Raya',
    description: 'MDF tahan lembab untuk kebutuhan interior area basah, hanya dari PT. Mitra Jaya Raya.',
    images: ['/hmr-kayu-olahan.jpg'], // Pastikan file tersedia
  },
};


const HmrLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default HmrLayout;