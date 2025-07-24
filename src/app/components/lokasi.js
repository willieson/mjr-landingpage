const LokasiComponent = () => {
  return (
    <>
    <section className="page-section bg-light" id="location">
    <div className="container">
        <div className="text-center">
            <h1 className="section-heading text-uppercase">Lokasi</h1>
            <p className="section-subheading text-muted">Lokasi Pusat & Cabang Kami</p>
        </div>
        <div className="row d-flex align-items-center mb-4">
            <div className="col-lg-6 mx-auto text-center">
                <h4>Kantor Pusat</h4>
                <p className="large text-muted">
                    Jl. Raya Prancis Pergudangan 75 Blok F No 8A
                   <br /> Tangerang Banten Indonesia 15221
                   <br /> Telepon : (021) 550 495 154</p>
            </div>
            <div className="col-lg-6">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m10!1m3!1d63475.4664405566!2d106.685212!3d-6.101499!2m1!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a034a14840a67%3A0x6040795558350e44!2sPT.%20Mitra%20Jaya%20Raya!5e0!3m2!1sen!2sus!4v1735201051649!5m2!1sen!2sus"
  width="400"
  height="300"
  style={{ border: 0 }} // ✅ ubah jadi objek JS
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
   title="Lokasi PT Mitra Jaya Raya"
/>
  </div>
        </div>
        
        <div className="row">
            <div className="col-lg-8">
                <h3>Lokasi Cabang</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Tangerang</h4>
                    <p className="text-muted">
                        Jl. Industri Raya III Blok AD-23A
                        <br />  Kawasan Industri Jatake Tangerang 15710
                        </p>
                    <p className="text-muted">
                    <br />  Jl. Gatot Soebroto KM 5.5 No.57-58
                        <br />   Kel. Kroncong, Kec. Jatiuwung,
                        <br />Kota Tangerang Banten 15134
                        <br /> Telepon : (021) 593 206 01 // (021) 593 206 02</p>
                    
                </div>
            </div>
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Bekasi</h4>
                    <p className="text-muted">
                        Jl. Marunda Makmur, Kawasan Industri & pergudangan Marunda Center Blok A2 No.10 Segara Makmur, Taruna Jaya, Bekasi Jawa Barat 17850
                        <br />   Telepon : (021) 221 484 89 // (021) 221 488 8
                    </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Surabaya</h4>
                    <p className="text-muted">
                        Jl. Margomulyo Pergudangan Margomulyo Permai
                        <br />    Blok Q 11, Surabaya Jawa Timur 60138
                        <br />   Telepon : (031) 748 125 1 // (031) 748 087 0
                    </p>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Semarang</h4>
                    <p className="text-muted">
                        Jl. Arteri Kaliwungu Km 23,8
                        <br />  Desa Kumpulrejo, Kecamatan Kaliwungu
                        <br />  Kabupaten Kendal Semarang 51372
                        <br />  Telepon : (0294) 369 066 5 </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Bali</h4>
                    <p className="text-muted">
                        Jl. By pass prof Ida Bagus Mantra No.168, Dusun tangtu Desa Kesiman Kertalangu, Denpasar Timur 80237
                        <br />  Telepon : (0361) 476 400 4 </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="team-member">
                    <h4>Palembang</h4>
                    <p className="text-muted">
                        Jl. Tanjung Api - Api KM 7, Banyuasin, Palembang Sumatera Selatan 30961
                        <br />  Telepon : 0811 7318 087
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>
</>
  );
};

export default LokasiComponent;