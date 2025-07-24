export const metadata = {
  title: 'FRM (Fire Retardant MDF) | PT. Mitra Jaya Raya',
  description: 'Produk FRM (Fire Retardant MDF) dari PT. Mitra Jaya Raya dirancang khusus tahan api, cocok untuk kebutuhan interior bangunan komersial dan residensial.',
  keywords: 'FRM, Fire Retardant MDF, MDF tahan api, papan MDF tahan panas, FRM Indonesia, material tahan api, FRM Mitra Jaya Raya, kayu tahan api',
  openGraph: {
    title: 'FRM (Fire Retardant MDF) | PT. Mitra Jaya Raya',
    description: 'Solusi papan MDF tahan api untuk keamanan ekstra dalam aplikasi interior dan furnitur, hanya di PT. Mitra Jaya Raya.',
    url: 'https://mitrajayaraya.com/frm',
    siteName: 'PT. Mitra Jaya Raya',
    images: [
      {
        url: '/frm-kayu-olahan.jpg', // Ganti sesuai dengan gambar asli FRM
        width: 800,
        height: 600,
        alt: 'FRM Fire Retardant MDF',
      },
    ],
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FRM | PT. Mitra Jaya Raya',
    description: 'FRM (Fire Retardant MDF) tahan api untuk kebutuhan interior dengan standar keamanan tinggi.',
    images: ['/frm-kayu-olahan.jpg'], // Pastikan file tersedia
  },
};


const FrmLayout = ({
  children,
}) => {
  return (
    <>
      {children}
    </>
  );
};

export default FrmLayout;