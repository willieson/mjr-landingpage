import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faCircle, faHandHoldingDollar, faTruck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
     <header className="masthead">
        <div className="container">
            <div className="masthead-heading">
                <h1 className="tx-shadow">Distributor Kayu Olahan</h1>
            </div>
            <a className="btn btn-success btn-xl text-uppercase" target="_BLANK" href="https://api.whatsapp.com/send/?phone=6281390002633&text&type=phone_number&app_absent=0"><i className="fa-solid fa-phone"></i> Hubungi Kami</a>
        </div>
    </header>


    <section className="page-section">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Layanan</h2>
                <h3 className="section-subheading text-muted">Apa yang kita lakukan?</h3>
            </div>
            <div className="row text-center">
                <div className="col-md-4" data-aos="fade-up">
                    
             
                    <span className="fa-stack fa-4x">
                        <FontAwesomeIcon icon={faCircle} className='fa-stack-2x text-primary'/>
                        <FontAwesomeIcon icon={faPhoneVolume} className='fa-stack-1x fa-inverse'/>
                    </span>
                    <h4 className="my-3">Hubungi Kami</h4>
                    <p className="text-muted">Dapatkan informasi dan Buat Kesepakatan</p>
                </div>
                <div className="col-md-4" data-aos="fade-down" data-aos-anchor-placement="top-center">
                    <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faCircle} className='fa-stack-2x text-primary'/>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className='fa-stack-1x fa-inverse'/>
                    </span>
                    <h4 className="my-3">Pembayaran</h4>
                    <p className="text-muted">Lakukan Pembayaran Sesuai Kesepakatan</p>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <span className="fa-stack fa-4x">
                    <FontAwesomeIcon icon={faCircle} className='fa-stack-2x text-primary'/>
                    <FontAwesomeIcon icon={faTruck} className='fa-stack-1x fa-inverse'/>
                    </span>
                    <h4 className="my-3">Pengiriman</h4>
                    <p className="text-muted">Barang akan dikirim secepatnya</p>
                </div>
            </div>
        </div>
    </section>

    <section className="page-section">
        <div className="container">
            <div data-aos="flip-up" className="text-center">
                <h2 className="section-heading text-uppercase">Tentang Kami</h2>
            </div>
            <ul className="timeline">
                <li>
                    <div data-aos="fade-up" className="timeline-image"><Image fill className="rounded-circle img-fluid" src="/about-mitra-jaya-raya.jpg" alt="PT Mitra Jaya Raya" /></div>
                    <div className="timeline-panel">
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-heading">
                            <h4>2006</h4>
                            <h4 className="subheading">PT. Mitra Jaya Raya</h4>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-body">
                            <p className="text-muted">Bergerak di bidang distributor kayu olahan. dipercaya menjadi distributor resmi PT Sumatera Prima Fiberboard (SPF) dalam mendistribusikan berbagai produk kayu olahan</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div data-aos="fade-up" className="timeline-image"><Image fill className="rounded-circle img-fluid" src="/about-dayasakti-usahamandiri.jpg" alt="PT Dayasakti Usahamandiri" /></div>
                    <div className="timeline-panel">
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-heading">
                            <h4>2010</h4>
                            <h4 className="subheading">PT. Dayasakti Usahamandiri</h4>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-body">
                            <p className="text-muted">Bergerak di bidang distribusi kayu olahan. dipercaya menjadi distributor resmi PT Canang Indah dalam mendistribusikan berbagai produk kayu olahan</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div data-aos="fade-up" className="timeline-image"><Image fill className="rounded-circle img-fluid" src="/visi-mitra-jaya-raya.jpg" alt="Visi PT Mitra Jaya Raya" /></div>
                    <div className="timeline-panel">
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-heading">
                            <h4>Visi</h4>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-body">

                            <ul className="text-muted right-align-list">
                                <li>Menjadi perusahaan distributor kayu olahan terpercaya dan terkemuka di seluruh Indonesia</li>
                                <li>Menjadi salah satu perusahaan distributor kayu olahan yang sudah terjamin kualitasnya</li>
                            </ul>


                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div data-aos="fade-up" className="timeline-image"><Image fill className="rounded-circle img-fluid" src="/misi-mitra-jaya-raya.jpg" alt="Misi PT Mitra Jaya Raya" /></div>
                    <div data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Misi</h4>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="timeline-body">

                            <ul className="text-muted">
                                <li>Memberikan pelayanan terbaik dengan didukung oleh tenaga kerja yang handal dan terlatih</li>
                                <li>Membangun hubungan yang erat dan saling menguntungkan dengan semua mitra bisnis</li>
                                <li>Memberikan rasa percaya dan aman kepada pelanggan dalam keterlibatan bersama</li>
                                <li>Menyediakan layanan distribusi kayu olahan yang andal dan efisien, menawarkan berbagai produk berkualitas dari pemasok terpercaya, dan memberikan solusi kreatif dan layanan pelanggan yang unggul untuk memaksimalkan kebutuhan pasar</li>
                            </ul>

                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div data-aos="fade-up" className="timeline-image">
                        <h4>
                            Jadilah
                            <br />
                            Bagian Dari
                            <br />
                            Cerita Kami!
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    </>
  );
};

export default Hero;