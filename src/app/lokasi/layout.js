export const metadata = {
  title: 'Lokasi | PT. Mitra Jaya Raya',
  description: 'Kunjungi lokasi kantor dan gudang PT. Mitra Jaya Raya. Temukan alamat, peta, dan informasi kontak resmi kami di Tangerang.',
  keywords: 'lokasi PT Mitra Jaya Raya, alamat Mitra Jaya Raya, kantor Mitra Jaya Raya, peta lokasi, gudang kayu Tangerang, distributor kayu Tangerang, toko kayu Tangerang',
  openGraph: {
    title: 'Lokasi | PT. Mitra Jaya Raya',
    description: 'Temukan lokasi kantor dan gudang PT. Mitra Jaya Raya di Tangerang lengkap dengan peta dan kontak.',
    url: 'https://mitrajayaraya.com/lokasi',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/logo.webp', // ubah sesuai gambar representatif
        width: 800,
        height: 600,
        alt: 'Peta Lokasi PT. Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lokasi | PT. Mitra Jaya Raya',
    description: 'Lihat lokasi resmi kantor & gudang PT. Mitra Jaya Raya di Tangerang.',
    images: ['/logo.webp'], // sesuaikan
  },
};

const LokasiLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default LokasiLayout;