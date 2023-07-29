import './css/Events.css'
import Navbar from '../components/Navbar';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Arrow from './../content/landingpage/Arrow.png'
import Cover1 from './../content/landingpage/cover1.jpg'
import frkaAi from './../content/landingpage/frkaAi.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = (props) => {

    useEffect(() => {
        AOS.init({
            once:true,
        });
      }, [])

    const {routerPath, setRouterPath, eventPath, setEventPath, account, setAccount} = props
    const [event, setEvent] = useState(null)



    function handleBla() {
        console.log(event)
    }

    function handleSendingIdBack(id) {
        setRouterPath(id)
        setEventPath(`events/${id}`)
    }
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch(`http://localhost:4000/events/`)
            const json = await response.json()

            console.log(routerPath)
            if(response.ok) {
                setEvent(json)
            }
        }
    
        fetchEvents()
    },  [])

    return(
        <div className="events">
            <Navbar/>

            <h1 className="main-h1" data-aos='fade-up' data-aos-duration="1200" data-aos-delay="300">RASPORED ŽURKI</h1>


            <h1 className="mesec-h1" data-aos='fade-up' data-aos-duration="1300" data-aos-delay="600"><span className='plava'>A</span>VGUST</h1>

            <div className="line" data-aos='fade-up' data-aos-duration="1300" data-aos-delay="600"></div>

            <div className="calendar-links-div">
                <div className="calendar-div">
                    <div className="margin-top"></div>
                    <div className="row-1" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="1000">
                        <div className="number1 calbox">
                            <h1 className="number-h1">1</h1>
                        </div>
                        <div className="number2 calbox">
                            <h1 className="number-h1">2</h1>
                        </div>
                        <div className="number3 calbox">
                            <h1 className="number-h1">3</h1>
                        </div>
                        <div className="number4 calbox">
                            <h1 className="number-h1">4</h1>
                        </div>
                        <div className="number5 calbox">
                            <h1 className="number-h1">5</h1>
                        </div>
                        <div className="number6 calbox">
                            <h1 className="number-h1">6</h1>
                        </div>
                        <div className="number7 calbox">
                            <h1 className="number-h1">7</h1>
                        </div>
                    </div>
                    <div className="row-2" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="1100">
                        <div className="number8 calbox">
                            <h1 className="number-h1">8</h1>
                        </div>
                        <div className="number9 calbox">
                            <h1 className="number-h1">9</h1>
                        </div>
                        <div className="number10 calbox">
                            <h1 className="number-h1">10</h1>
                        </div>
                        <div className="number11 calbox">
                            <h1 className="number-h1">11</h1>
                        </div>
                        <div className="number12 calbox">
                            <h1 className="number-h1">12</h1>
                        </div>
                        <div className="number13 calbox highlight">
                            <h1 className="number-h1 highlight-number-color">13</h1>
                        </div>
                        <div className="number14 calbox">
                            <h1 className="number-h1">14</h1>
                        </div>
                    </div>
                    <div className="row-3" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="1200">
                        <div className="number15 calbox">
                            <h1 className="number-h1">15</h1>
                        </div>
                        <div className="number16 calbox">
                            <h1 className="number-h1">16</h1>
                        </div>
                        <div className="number17 calbox">
                            <h1 className="number-h1">17</h1>
                        </div>
                        <div className="number18 calbox">
                            <h1 className="number-h1">18</h1>
                        </div>
                        <div className="number19 calbox">
                            <h1 className="number-h1">19</h1>
                        </div>
                        <div className="number20 calbox highlight">
                            <h1 className="number-h1 highlight-number-color">20</h1>
                        </div>
                        <div className="number21 calbox ">
                            <h1 className="number-h1 ">21</h1>
                        </div>
                    </div>
                    <div className="row-4" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="1300">
                        <div className="number22 calbox">
                            <h1 className="number-h1">22</h1>
                        </div>
                        <div className="number23 calbox">
                            <h1 className="number-h1">23</h1>
                        </div>
                        <div className="number24 calbox">
                            <h1 className="number-h1">24</h1>
                        </div>
                        <div className="number25 calbox">
                            <h1 className="number-h1">25</h1>
                        </div>
                        <div className="number26 calbox">
                            <h1 className="number-h1">26</h1>
                        </div>
                        <div className="number27 calbox">
                            <h1 className="number-h1">27</h1>
                        </div>
                        <div className="number28 calbox highlight-plava">
                            <h1 className="number-h1 highlight-number-color">28</h1>
                        </div>
                    </div>
                    <div className="row-5" data-aos='fade-down' data-aos-duration="1500" data-aos-delay="1400">
                        <div className="number29 calbox">
                            <h1 className="number-h1">29</h1>
                        </div>
                        <div className="number30 calbox">
                            <h1 className="number-h1">30</h1>
                        </div>
                        <div className="number31 calbox">
                            <h1 className="number-h1">31</h1>
                        </div>
                    </div>
                    <div className="margin-bottom screen"></div>
                </div>
                <div className="links">
                    <div className="margin-top screen"></div>
                    <div className="row-1"></div>
                    <div className="row-2 links-margin">
                        <div className="event-link">
                            <Link to="/13.08" data-aos='fade-right' data-aos-duration="1500" data-aos-delay="2500">
                                <h1 className="link-h1"><span className="plava">/</span>13.08. ZAPPA BARKA...</h1>
                                <img src={Arrow} alt="" className="arrow-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="row-3 links-margin">
                        <div className="event-link">
                            <Link to="/13.08" data-aos='fade-right' data-aos-duration="2000" data-aos-delay="2500">
                                <h1 className="link-h1"><span className="plava">/</span>20.08. ZAPPA BARKA...</h1>
                                <img src={Arrow} alt="" className="arrow-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="row-4 links-margin">
                        <div className="event-link">
                            <Link to="/13.08" data-aos='fade-right' data-aos-duration="2500" data-aos-delay="2500">
                                <h1 className="link-h1"><span className="plava">/</span>28.08. TRANZIT...</h1>
                                <img src={Arrow} alt="" className="arrow-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="row-5"></div>
                    <div className="margin-top"></div>
                </div>
            </div>

            <div className="event-second-h1" data-aos='fade-up' data-aos-duration="2000" data-aos-delay="2500"><span className="plava">P</span>rethodne Žurke</div>

            <div className="line" data-aos='fade-up' data-aos-duration="2000" data-aos-delay="2500"></div>

            <div className="prethodne-zurke">
                <div className="event-last-card" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="2800">
                    <img src={Cover1} alt="" className="event-last-image" />
                    <div className="event-last-details" >
                        <h1 className="event-last-h1">HOT MESS</h1>
                        <h1 className="event-last-h1-date">02.07.</h1>


                        <div className="last-event-link">
                            <Link to="https://www.google.com/drive/" >
                                <h1 className="event-last-h1-link"><span className="plava">/</span>POGLEDAJ SLIKE</h1>
                                <img src={Arrow} alt="" className="arrow-icon link-arrow" />
                            </Link>
                        </div>
                        

                    </div>
                </div>

                <div className="event-last-card" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="2000">
                    <img src={frkaAi} alt="" className="event-last-image" />
                    <div className="event-last-details" >
                        <h1 className="event-last-h1">HOT MESS</h1>
                        <h1 className="event-last-h1-date">02.07.</h1>


                        <div className="last-event-link">
                            <Link to="https://www.google.com/drive/" >
                                <h1 className="event-last-h1-link"><span className="plava">/</span>POGLEDAJ SLIKE</h1>
                                <img src={Arrow} alt="" className="arrow-icon link-arrow" />
                            </Link>
                        </div>
                        

                    </div>
                </div>

                <div className="event-last-card" data-aos='fade-down' data-aos-duration="2000" data-aos-delay="2000">
                    <img src={frkaAi} alt="" className="event-last-image" />
                    <div className="event-last-details" >
                        <h1 className="event-last-h1">HOT MESS</h1>
                        <h1 className="event-last-h1-date">02.07.</h1>


                        <div className="last-event-link">
                            <Link to="https://www.google.com/drive/" >
                                <h1 className="event-last-h1-link"><span className="plava">/</span>POGLEDAJ SLIKE</h1>
                                <img src={Arrow} alt="" className="arrow-icon link-arrow" />
                            </Link>
                        </div>
                        

                    </div>
                </div>
            </div>


            <div className="footer"></div>

            {/* 
            <h1 className='events-title'>EVENTS</h1>

            {event && event.map((event) => (
                <div className="card" key={event._id}>
                    <Link to={event._id} onClick={() => handleSendingIdBack(event._id)}>
                        <h1 className="event-title">{event.title}</h1>
                        <hr />
                        <p className="event-date">{event.date}</p>
                        <p className="event-description">{event.description}</p>
                        <p className="event-price">{event.price}</p>
                        <button className="event-button">Vidi sve</button>
                    </Link>
                </div>
            ))}

             */}
        </div>
    )
}

export default Events;