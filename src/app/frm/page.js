import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const frm = () => {
  return (
    <>
      <Navbar />
      <section className="page-section bg-light" id="product">
        <div className="container">
          <div data-aos="flip-up" className="text-center mb-4">
            <h1 className="section-heading text-uppercase">FRM</h1>
            <p>Fire Retardant MDF</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Image
                className="img-fluid d-block mx-auto mb-3"
                src="/frm-kayu-olahan.jpg"
                alt="frm Kayu Olahan PT Mitra Jaya Raya"
                width={800}
                height={500}
              />

              <p className="text-muted text-justify">
              FRM board merupakan papan serat yang memiliki fungsi tahan terhadap percikan api. Biasanya papan ini sangat cocok untuk keperluan proses industri, dekorasi interior, dan produksi furnitur. Papan FRM juga dapat digunakan sebagai bagian dari elemen atau sistem bangunan yang bertujuan untuk meningkatkan ketahanan terhadap api, seperti pintu darurat, sistem plafon, atau dinding partisi. Papan FRM ini dapat dipernis atau difinishing dengan kertas, foil, melamin, veneer, atau laminasi bertekanan tinggi.
        </p>

              <div className="d-flex justify-content-center mb-4">
                <table style={{ textAlign: "left" }}>
                  <tbody>
                    <tr>
                      <td><strong>Ketebalan</strong></td>
                      <td>: 2.5mm - 25mm</td>
                    </tr>
                    <tr>
                      <td><strong>Ukuran</strong></td>
                      <td>: 1.22mm x 2.44mm</td>
                    </tr>
                    <tr>
                      <td><strong>Material</strong></td>
                      <td>: Rubber</td>
                    </tr>
                    <tr>
                      <td><strong>Perekat</strong></td>
                      <td>: E2, E1, E0 & P2 </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center">
                <Link href="/produk" className="btn btn-primary">
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" aria-hidden="true"/> Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default frm;
