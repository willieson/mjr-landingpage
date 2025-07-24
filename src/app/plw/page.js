import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const plw = () => {
  return (
    <>
      <Navbar />
      <section className="page-section bg-light" id="product">
        <div className="container">
          <div data-aos="flip-up" className="text-center mb-4">
            <h1 className="section-heading text-uppercase">Plywood</h1>
            <p>Plywood Uty Better</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Image
                className="img-fluid d-block mx-auto mb-3"
                src="/plywood-kayu-olahan.jpg"
                alt="Plywood Kayu Olahan PT Mitra Jaya Raya"
                width={800}
                height={500}
              />

              <p className="text-muted text-justify">
              Plywood adalah kayu olahan yang terbuat dari papan prefabrikasi yang terdiri dari beberapa lapis kayu dengan menggunakan perekat dan pengepresan bertekanan tinggi. Dengan menggunakan tripleks sebagai pengganti kayu solid, Anda dapat menghemat biaya produksi atau tenaga kerja.
           </p>

              <div className="d-flex justify-content-center mb-4">
                <table style={{ textAlign: "left" }}>
                  <tbody>
                    <tr>
                      <td><strong>Ketebalan</strong></td>
                      <td>: 3mm - 24mm</td>
                    </tr>
                    <tr>
                      <td><strong>Ukuran</strong></td>
                      <td>: 1.22mm x 2.44mm</td>
                    </tr>
                    <tr>
                      <td><strong>Material</strong></td>
                      <td>: Mixed Meranti</td>
                    </tr>
                    <tr>
                      <td><strong>Perekat</strong></td>
                      <td>: E2</td>
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

export default plw;
