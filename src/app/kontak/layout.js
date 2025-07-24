export const metadata = {
  title: 'Kontak | PT. Mitra Jaya Raya',
  description: 'Hubungi PT. Mitra Jaya Raya untuk informasi produk, pemesanan, atau pertanyaan lainnya. Kami siap melayani Anda dengan cepat dan profesional.',
  keywords: 'kontak PT Mitra Jaya Raya, hubungi Mitra Jaya Raya, alamat email Mitra Jaya Raya, nomor telepon Mitra Jaya Raya, form kontak distributor kayu',
  openGraph: {
    title: 'Kontak | PT. Mitra Jaya Raya',
    description: 'Formulir kontak dan informasi resmi untuk menghubungi PT. Mitra Jaya Raya.',
    url: 'https://mitrajayaraya.com/kontak',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/logo.webp', // Sesuaikan jika ada gambar representatif
        width: 800,
        height: 600,
        alt: 'Kontak PT. Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontak | PT. Mitra Jaya Raya',
    description: 'Hubungi kami melalui form kontak atau informasi resmi lainnya.',
    images: ['/logo.webp'], // Sesuaikan
  },
};


const KontakLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default KontakLayout;