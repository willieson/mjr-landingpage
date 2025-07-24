import Image from "next/image";

const ProdukComponent = () => {
  return (
    <>
     <section className="page-section bg-light" id="product">
        <div className="container">
            <div data-aos="flip-up" className="text-center">
                <h1 className="section-heading text-uppercase">Produk</h1>
                <p className="section-subheading text-muted">Klik Gambar untuk lihat Detail.</p>
            </div>
            <div className="row">
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 1--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./mdf">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/mdf-kayu-olahan.jpg" alt="MDF Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">MDF</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Medium Density Fibreboard</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 2--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./hmr">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/hmr-kayu-olahan.jpg" alt="HMR Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">HMR</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>High Moist Resistance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 3--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./pb">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/particle-board-kayu-olahan.jpg" alt="Particle Board Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">PB</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Particle Board</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* <!-- Portfolio item 4--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./plw">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/plywood-kayu-olahan.jpg" alt="Plywood Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Plywood</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Plywood</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* <!-- Portfolio item 5--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./mfm">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/mfm-kayu-olahan.jpg" alt="MFM Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">MFM</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Melamine Faced MDF</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6">
                    {/* <!-- Portfolio item 6--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./frm">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/frm-kayu-olahan.jpg" alt="FRM Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">FRM</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Fire Retardant MDF</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="col-lg-4 col-sm-6">
                    {/* <!-- Portfolio item 7--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" href="./cdf">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-magnifying-glass fa-3x"></i></div>
                            </div>
                            <Image  width={1000} height={1000} className="img-fluid" src="/cdf-kayu-olahan.jpg" alt="CDF Kayu Olahan PT Mitra Jaya Raya" />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">CDF</div>
                            <div className="portfolio-caption-subheading text-muted">
                                <p>Compact Density Fibreboard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ProdukComponent;