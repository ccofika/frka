import './../App.css'
import Navbar from '../components/Navbar';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Events = (props) => {

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
            <Navbar 
             account={account}
             setAccount={setAccount}
            />
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
        </div>
    )
}

export default Events;