import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const hmr = () => {
  return (
    <>
      <Navbar />
      <section className="page-section bg-light" id="product">
        <div className="container">
          <div data-aos="flip-up" className="text-center mb-4">
            <h1 className="section-heading text-uppercase">HMR</h1>
            <p>High Moist Resistance</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Image
                className="img-fluid d-block mx-auto mb-3"
                src="/hmr-kayu-olahan.jpg"
                alt="hmr Kayu Olahan PT Mitra Jaya Raya"
                width={800}
                height={500}
              />

              <p className="text-muted text-justify">
              HMR (High Moisture Resistant) adalah panel berbahan dasar kayu premium yang menawarkan ketahanan terhadap kelembapan sehingga menjadi pilihan ideal untuk aplikasi lemari dapur dan proyek desain interior lainnya. Papan HMR menghasilkan keseimbangan sempurna antara kualitas dan estetika.
            </p>

              <div className="d-flex justify-content-center mb-4">
                <table style={{ textAlign: "left" }}>
                  <tbody>
                    <tr>
                      <td><strong>Ketebalan</strong></td>
                      <td>: 2mm - 25mm</td>
                    </tr>
                    <tr>
                      <td><strong>Ukuran</strong></td>
                      <td>: 1.22mm x 2.44mm</td>
                    </tr>
                    <tr>
                      <td><strong>Material</strong></td>
                      <td>: Rubber & MLH</td>
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

export default hmr;
