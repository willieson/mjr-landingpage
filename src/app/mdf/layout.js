export const metadata = {
  title: 'MDF (Medium Density Fibreboard) | PT. Mitra Jaya Raya',
  description: 'MDF berkualitas dari PT. Mitra Jaya Raya — papan kayu olahan yang halus dan serbaguna untuk berbagai kebutuhan furnitur seperti rak, meja, dan lemari.',
  keywords: 'MDF, Medium Density Fibreboard, MDF Indonesia, kayu olahan, MDF murah, papan MDF, MDF furnitur, Mitra Jaya Raya',
  openGraph: {
    title: 'MDF (Medium Density Fibreboard) | PT. Mitra Jaya Raya',
    description: 'Temukan produk MDF terbaik dari PT. Mitra Jaya Raya, ideal untuk industri furnitur dan interior.',
    url: 'https://mitrajayaraya.com/mdf',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/mdf-kayu-olahan.jpg', // Pastikan file ada
        width: 800,
        height: 600,
        alt: 'MDF Kayu Olahan Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDF (Medium Density Fibreboard) | PT. Mitra Jaya Raya',
    description: 'Papan MDF halus dan padat untuk furnitur dan kebutuhan interior lainnya, dari PT. Mitra Jaya Raya.',
    images: ['/mdf-kayu-olahan.jpg'],
  },
};


const MdfLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default MdfLayout;