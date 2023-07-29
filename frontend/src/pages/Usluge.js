import './css/Usluge.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

const Bookoffrka = (props) => {


    return(
        <div className="usluge-main">
            <Navbar />

            <div className="usluge-main-div">
                <h1 className="rodjendan-h1"><span className="plava">/</span>ORGANIZACIJA RODJENDANA</h1>
                <h1 className="rodjendan-desc">Organizujemo vam rodjendane po najboljim cenama u gradu i garantovanim dogadjajem koji pamtite
zauvek. <br />
uz dogovorenu cenu uracunato je (sem ako u pozivu nije dogovoreno drugacije): <br />
- klub <br />
-osvetljenje & ozvučenje <br />
- piće <br />
- dj <br />
- fotograf</h1>

            <Link className='usluge-link' to="/Upitnik"><button className="usluge-contact-button"> KONTAKTIRAJTE NAS</button></Link>


            <h1 className="rodjendan-h1"><span className="plava">/</span>ORGANIZACIJA ŽURKI</h1>
                <h1 className="rodjendan-desc">Organizujemo SVE OD PLAKATA PREKO MARKETINGA DO SAME ŽURKE po najboljim cenama u gradu i garantovanim
                    dogadjajem koji ĆETE pamtitI zauvek. <br />
                    uz dogovorenu cenu uracunato je (sem ako u pozivu nije dogovoreno drugacije): <br />
                    - INSTAGRAM POST & MARKETING <br />
                    - REKLAMA NA NAŠEM INSTAGRAMU <br />
                    - TROŠKOVI klubA <br />
                    - dj <br />
                    - fotograf</h1>

                <Link className='usluge-link' to="/Upitnik"><button className="usluge-contact-button"> KONTAKTIRAJTE NAS</button></Link>
            </div>
        </div>
    )
}

export default Bookoffrka;