export const metadata = {
  title: 'Produk | PT. Mitra Jaya Raya',
  description: 'Temukan berbagai produk kayu berkualitas dari PT. Mitra Jaya Raya seperti MDF, HDF, dan Plywood untuk kebutuhan industri dan furnitur Anda.',
  keywords: 'produk kayu, MDF, HDF, plywood, supplier kayu olahan, Mitra Jaya Raya, kayu berkualitas, furnitur kayu, papan MDF, papan kayu olahan',
  openGraph: {
    title: 'Produk | PT. Mitra Jaya Raya',
    description: 'Produk kayu berkualitas dari PT. Mitra Jaya Raya seperti MDF, HDF, dan Plywood.',
    url: 'https://mitrajayaraya.com/produk',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Produk MDF - Mitra Jaya Raya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produk | PT. Mitra Jaya Raya',
    description: 'Temukan berbagai produk kayu berkualitas seperti MDF, HDF, dan Plywood.',
    images: ['/logo.webp'],
  },
};


const ProdukLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default ProdukLayout;