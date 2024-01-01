import { Line, Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import flash from '../images/flash.png';
import file_text from '../images/file-text.png';
import home from '../images/home.png';
const Frame = () => {
    const dataPadam = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Tingkat Pemadaman Listrik",
                data: [20, 45, 30, 95, 60, 10, 75, 50, 60, 30, 10, 20],
                fill: true,
                backgroundColor: "rgba(45,173,255,0.15)",
                pointBackgroundColor: "rgba(45,173,255,0.15)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    const dataAkibat = {
        datasets: [{
            data: [25, 25, 50],
            backgroundColor: ['#ECC600', '#13EC00', '#008BE4'],
        }],
        labels: [
            'kabel putus',
            'cuaca buruk',
            'pembangkit listrik'
        ],

    };
    return (<div className="PLNDetail">
        <h4>Data Kota Semarang</h4>
        <hr></hr>
        <p>Tingkat Pemadaman Listrik</p>
        <div className="chartPLN">
            <Line id="graphLine" data={dataPadam} />

        </div>
        <hr style={{
            /* Line 16 */
            position: 'absolute',
            width: '183px',
            height: '0px',
            left: '89px',
            top: '442px',
            border: '3px solid #CACACA',

        }}></hr>
        <div className="chartInfo">
            <div className="cardPLN">
                <p>  Rumah Terdampak Pemadaman Bulan ini</p>
                <div className="d-flex flex-row">

                    <span>54</span>
                    <img src={flash} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>  Aduan Pemadaman Listrik Bulan Ini</p>
                <div className="d-flex flex-row">

                    <span>30</span>
                    <img src={file_text} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>  Rata-rata Rumah Padam Listrik</p>
                <div className="d-flex flex-row">

                    <span>25</span>
                    <img src={home} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>Kecamatan Yang Sering Terdampak Padam Listrik</p>
                <ul>
                    <li>Ngaliyan</li>
                    <li>Pedurungan</li>
                    <li>Banyumanik</li>
                    <li>Candisar</li>
                    <li>Gayamsari</li>
                </ul>
            </div>
        </div>
        <div className="chartAkibat d-flex flex-row">
            <Doughnut data={dataAkibat} />
        </div>

    </div>)
}

export default Frame;