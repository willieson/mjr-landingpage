export const metadata = {
  title: 'CDF (Compact Density Fibreboard) | PT. Mitra Jaya Raya',
  description: 'Produk CDF (Compact Density Fibreboard) berkualitas dari PT. Mitra Jaya Raya, ideal untuk kebutuhan furnitur dan interior dengan kekuatan serta ketahanan tinggi.',
  keywords: 'CDF, Compact Density Fibreboard, CDF Indonesia, CDF untuk furnitur, papan CDF, distributor CDF, kayu CDF, CDF Mitra Jaya Raya',
  openGraph: {
    title: 'CDF (Compact Density Fibreboard) | PT. Mitra Jaya Raya',
    description: 'Temukan produk CDF berkualitas untuk keperluan interior dan industri hanya di PT. Mitra Jaya Raya.',
    url: 'https://mitrajayaraya.com/cdf',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/cdf-kayu-olahan.jpg', // Ganti sesuai gambar CDF yang tersedia
        width: 800,
        height: 600,
        alt: 'CDF Compact Density Fibreboard',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDF | PT. Mitra Jaya Raya',
    description: 'Produk CDF unggulan untuk kebutuhan material kuat dan tahan lama.',
    images: ['/cdf-kayu-olahan.jpg'], // Ganti jika berbeda
  },
};


const cdfLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default cdfLayout;