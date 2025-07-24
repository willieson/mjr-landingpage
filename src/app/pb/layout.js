export const metadata = {
  title: 'Particle Board | PT. Mitra Jaya Raya',
  description: 'Particle board adalah papan kayu olahan yang terbuat dari partikel kayu dan resin, cocok untuk kebutuhan furnitur ekonomis dan interior modern.',
  keywords: 'particle board, papan partikel, kayu olahan, papan kayu murah, material furnitur, PT Mitra Jaya Raya, produk kayu olahan',
  openGraph: {
    title: 'Particle Board | PT. Mitra Jaya Raya',
    description: 'Produk Particle Board berkualitas dari PT. Mitra Jaya Raya, ideal untuk kebutuhan furnitur rumah, kantor, dan interior hemat biaya.',
    url: 'https://mitrajayaraya.com/pb',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/particle-board-kayu-olahan.jpg', // Ganti sesuai nama file Anda
        width: 800,
        height: 600,
        alt: 'Particle Board Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Particle Board | PT. Mitra Jaya Raya',
    description: 'Temukan produk particle board berkualitas untuk keperluan furnitur dan interior dari PT. Mitra Jaya Raya.',
    images: ['/particle-board-kayu-olahan.jpg'],
  },
};


const PbLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default PbLayout;