export const metadata = {
  title: 'Plywood | PT. Mitra Jaya Raya',
  description: 'Plywood adalah kayu lapis berkualitas tinggi yang terbuat dari beberapa lapisan veneer kayu, cocok untuk konstruksi, furnitur, dan keperluan interior.',
  keywords: 'plywood, kayu lapis, triplek, material konstruksi, furnitur, papan kayu, PT Mitra Jaya Raya, produk kayu olahan',
  openGraph: {
    title: 'Plywood | PT. Mitra Jaya Raya',
    description: 'Produk Plywood terbaik dari PT. Mitra Jaya Raya untuk kebutuhan konstruksi dan interior Anda.',
    url: 'https://mitrajayaraya.com/plw',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/plywood-kayu-olahan.jpg', // Ganti sesuai file gambar Anda
        width: 800,
        height: 600,
        alt: 'Plywood PT Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plywood | PT. Mitra Jaya Raya',
    description: 'Plywood berkualitas tinggi untuk berbagai kebutuhan industri dan rumah tangga. Tersedia di PT. Mitra Jaya Raya.',
    images: ['/plywood-kayu-olahan.jpg'],
  },
};


const PlwLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default PlwLayout;