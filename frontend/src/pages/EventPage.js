import { useEffect, useState } from "react"
import frkaKarta from './../content/landingpage/frka-karta.png'

import Navbar from './../components/Navbar'


const EventPage = (props) => {

    const {routerPath, setRouterPath, account, setAccount} = props
    const [event, setEvent] = useState([]) 
    
    function handleMessage() {
        alert("Uspesno ste kupili kartu");
    }

    useEffect(() => {
        const fetchEvent = async () => {
            const response = await fetch(`http://localhost:4000/events/${routerPath}`)
            const json = await response.json()

            console.log(routerPath)
            if(response.ok) {
                setEvent(json)

                console.log(event)
            }
        }
    
        fetchEvent()
    },  [])

    return(
            
        <div className="upcoming-events1" id='events'>
        <Navbar
         account={account}
         setAccount={setAccount}
        />

                    <div className="event-flex-div">
                        <div className="event-left-side">
                            <img src={frkaKarta} alt="" className="event-img" />
                        </div>
                        <div className="event-right-side">
                            <h1 className="event-title">{event.title}</h1>
                            <p className="event-date">{event.date}</p>
                            <hr />
                            <p className="event-opis">{event.description}</p>
                            <p className="cena-karte">{event.price}</p>
                                <button className="event-button" onClick={handleMessage}>Kupi</button>
                        </div>
                    </div>
            </div>
    );

}

export default EventPage;