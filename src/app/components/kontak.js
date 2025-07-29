'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const KontakComponent = () => {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }


  useEffect(() => {
    if (status === 'success') {
      setMessage('✅ Pesan berhasil dikirim!')
    } else if (status === 'error') {
      setMessage('❌ Gagal mengirim pesan.')
    } 
  }, [status])

  return (
    <>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h1 className="section-heading text-uppercase">Hubungi Kami</h1>
            {message && <p className="text-danger fw-bold">{message}</p>}
          </div>

          <form action="https://sales.mitrajayaraya.com/send/send.php" method="POST">
            <div className="row mb-3">
              <div className="col-md-6">
                <input name="nama" className="form-control" placeholder="Nama *" required />
              </div>
              <div className="col-md-6">
                <input name="email" type="email" className="form-control" placeholder="Email *" required />
              </div>
              <div className="col-md-6 mt-3">
                <input name="phone" className="form-control" placeholder="Nomor Telepon *" required
                  onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                />
              </div>

              <div className="col-md-6 mt-3">
                <textarea name="pesan" className="form-control" rows="4" placeholder="Pesan *" required></textarea>
              </div>
              <div className="col-md-6 mt-3">
        <input
          id="reCaptch"
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="reCaptch" className="ms-2">
          Security Message <span className="text-white">Ceklis untuk kirim</span>
        </label>
      </div>

            </div>


            <button   disabled={!checked} className="btn btn-primary btn-xl text-uppercase">Kirim Pesan</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default KontakComponent
