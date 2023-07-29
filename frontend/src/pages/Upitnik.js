import './css/Upitnik.css'
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect } from 'react';

const Upitnik = (props) => {
    useEffect(() => {
        AOS.init({
            once:true,
        });
      }, [])

    return(
        <div className="upitnik">
            <Navbar />

            <h1 className="upitnik-h1" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000">CONTACT</h1>
            <div className="contact-info">
                <div className="line-contact" data-aos='fade' data-aos-duration="1000"></div>
                <h1 className='upitnik-contact-h1' >
                    
                    phone -  <span className="regular" data-aos='fade-right' data-aos-duration="1000" data-aos-delay="200">0616389927 / 0611978156</span> <br/>

                    email -  <span className="regular" data-aos='fade-right' data-aos-duration="1000" data-aos-delay="400">frkazurke@gmail.com</span> <br/>

                    instagram -  <span className="regular" data-aos='fade-right' data-aos-duration="1000" data-aos-delay="600">fRKA.BG</span> <br/>

                    TIKTOK -  <span className="regular" data-aos='fade-right' data-aos-duration="1000" data-aos-delay="800">fRKA.BG</span> <br/>
                 
                </h1>
            </div>
        </div>
    )
}

export default Upitnik;