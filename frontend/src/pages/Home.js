import './../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import frkaText from './../content/landingpage/frka-text.png'
import frkaSubtext from './../content/landingpage/frka-subtext.png'
import downArrow from './../content/landingpage/down-arrow.png'
import frkaKarta from './../content/landingpage/frka-karta.png'

import { useEffect, useState } from 'react'

import Navbar from './../components/Navbar'

import { Link } from 'react-router-dom'

import FrkaCover from '../content/landingpage/frkaTranzit.jpg'
import instagramWhite from './../content/icons/instagramWhite.png'
import instagramBlack from './../content/icons/instagramBlack.png'
import upcomingApparel from './../content/landingpage/TShirt.png'


const Home = (props) => {

    useEffect(() => {
        AOS.init({
            once:true,
        });
      }, [])

    const {routerPath, setRouterPath, clothesPath, setClothesPath, account, setAccount} = props

    function handleSendingIdBack(id) {
        setRouterPath(id)
    }

    function handleSendingIdBack2(id) {
        setRouterPath(id)
        setClothesPath(`/odeca/${id}`)
    }


    const [event, setEvent] = useState(null)
    const [clothes, setClothes] = useState(null)
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:4000/events/glavna')
            const json = await response.json()


            if(response.ok) {
                await setEvent(json)
            }
        }

        const fetchClothes = async () => {
            const response = await fetch('http://localhost:4000/odeca/')
            const json = await response.json()

            if(response.ok) {
                await setClothes(json)
            }
        }
    
        fetchEvents()
        fetchClothes()
    },  [])

    

    return(
        <div className="home">
            <div className="welcome-section">
                <Navbar/>
                <div className="main-part">
                    <div className="landing-page-text">
                            <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-delay="300" className="welcome-main-text" > <span className="slash">/</span>FRKA</h1>
                            <h1 data-aos='fade-up' data-aos-duration="1000" data-aos-delay="600" className="welcome-submain-text">established 2022</h1>
                    </div>
                </div>
            </div>





            <div className="upcoming">

                <div className="upcoming-event">
                    <h1 className="upcoming-event-h1" data-aos='fade-down' data-aos-duration="1000">NEXT EVENT</h1>
                    <img src={FrkaCover} alt="" className="upcoming-event-img" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="300"/>

                    <div className="upcoming-event-buttons">
                        <Link to="https://www.instagram.com/p/Ct1imQ0MD2z/">
                            <img src={instagramWhite} alt="" className="upcoming-event-instagram-button" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="500"/>
                        </Link>
                        <button className="upcoming-event-seemore-button" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="500">SEE MORE</button>
                    </div>
                </div>

                <div className="upcoming-arrivals">
                    <h1 className="upcoming-arrivals-h1" data-aos='fade-down' data-aos-duration="1000">NEXT ARRIVALS</h1>
                    <img src={upcomingApparel} alt="" className="upcoming-arrivals-img" data-aos='fade-down' data-aos-duration="1000" data-aos-delay="300"/>

                    <div className="upcoming-arrivals-buttons">
                        <Link to="https://www.instagram.com/frka.bg/">
                            <img src={instagramBlack} alt="" className="upcoming-arrivals-instagram-button" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="500"/>
                        </Link>
                        <button className="upcoming-arrivals-seemore-button" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="500">SEE MORE</button>
                    </div>
                </div>
            </div>


            <div className="usluge">
                <h1 className="usluge-h1" data-aos='fade' data-aos-duration="2000">organizuj svoju<br/>žurku<span className="slash">/</span>proslavu</h1>

                <button className="usluge-button" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="800">usluge</button>
            </div>


            {/* 


            {event &&
            <div className="upcoming-events" id='events'>
                    <h1 className="events-main-text">UPCOMING EVENT</h1>

                    <div className="event-flex-div">
                        <div className="event-left-side">
                            <img src={frkaKarta} alt="" className="event-img" />
                        </div>
                        <div className="event-right-side">
                            <h1 className="event-title">{event[0].title}</h1>
                            <p className="event-date">{event[0].date}</p>
                            <Link to={event[0]._id} onClick={() => handleSendingIdBack(event[0]._id)}>  
                                <button className="event-button">VIDI SVE</button>
                            </Link>
                        </div>
                    </div>
            </div>}

            

            <div className="odeca-div">
                <h1 className="odeca-title">NEW ARRIVAL</h1>

                {clothes && <div className="cloth">
                    <h1 className="cloth-title">{clothes[1].title}</h1>
                    <img src={clothes[1].image_url} alt="" className="cloth-img" />
                    <p className="cloth-price">{clothes[1].price}rsd</p>
                    

                    <Link to={`/odeca/${clothes[1]._id}`} onClick={() => handleSendingIdBack2(clothes[0]._id)}>  
                        <button className="cloth-button">Kupi</button>
                    </Link>
                </div>}
            </div>

            <div className="upitnik-div">
                <h1 className="upitnik-title">DONESI ODLUKU O ZURCI</h1>
                <Link to='/upitnik' >
                    
                <button className="upitnik-button">POPUNI UPITNIK</button>
                </Link>
            </div>

             */}
            
        </div>
    );
}

export default Home;