import home from '../images/rumah.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';

const contact = () => {
    return (<>
        <h1 className='text-center fw-bold'>KONTAK</h1>
        <div className="d-flex flex-row gap-3 justify-content-center" >
            <div className="bg-primary p-2 d-flex flex-column justify-content-center" style={{ borderRadius: '10px', width: '400px' }}>
                <div className='d-flex flex-row align-items-center'>

                    <img src={phone} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='text-white form-label m-0'>: 0816956469</p>
                </div>
                <div className='d-flex flex-row align-items-center'>

                    <img src={mail} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='text-white m-0'>: informationsystempln@gmail.com</p>
                </div>

            </div>
            <div className="bg-primary p-2" style={{ borderRadius: '10px', width: '600px' }}>
                <div className='d-flex flex-row'>
                    <img src={home} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='ps-2 text-white'>Kantor</p>
                </div>
                <p className='text-white' style={{ width: '300px' }}>
                    Jalan Pendrikan Kidul No. 58, Semarang Tengah, Semarang, Jawa Tengah.
                </p>
            </div>
        </div>
        <div className='bg-primary d-flex flex-column justify-content-center p-5 m-5' style={{ borderRadius: '10px' }}>
            <div class="mb-3">
                <label className='text-white' for="nama">Nama:</label>
                <input type="text" class="form-control" id="nama" />
            </div>
            <div class="mb-3">
                <label className='text-white' for="phone">Nomor Telpon;</label>
                <input type="email" class="form-control" id="phone" />
            </div>
            <div class="mb-3">
                <label className='text-white' for="keluhan">Keluhan</label>
                <textarea class="form-control" id="keluhan" rows="3"></textarea>
            </div>

        </div>
    </>)
}

export default contact;