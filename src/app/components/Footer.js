import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; Mitra Jaya Raya 2025</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <p>Toko Online Resmi</p>
                    <a href="https://shopee.co.id/mitrajaya.offical" target="_blank" rel="noopener noreferrer">
  <Image 
    src="/shopee.webp" 
    alt="Shopee PT Mitra Jaya Raya" 
    width={60} 
    height={60} 
    className="zoom-image"
    title="Shopee PT Mitra Jaya Raya"
  />
</a>

<a href="https://www.tokopedia.com/ptmitrajayaraya" target="_blank" rel="noopener noreferrer">
  <Image 
    src="/tokopedia.webp" 
    alt="Tokopedia PT Mitra Jaya Raya" 
    width={60} 
    height={60} 
    className="zoom-image"
    title="Tokopedia PT Mitra Jaya Raya"
  />
</a>

               </div>
                <div className="col-lg-4 text-lg-end">
                    <Image src="/certificated.jpg" width={300} height={50} alt="certificate Mitra Jaya Raya" />
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;