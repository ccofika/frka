import { useEffect, useState } from "react"
import frkaKarta from './../content/landingpage/frka-karta.png'

import Navbar from './../components/Navbar'


const ClothesPage = (props) => {

    const {routerPath, setRouterPath, account, setAccount} = props
    const [clothes, setClothes] = useState([]) 
    
    function handleMessage() {
        alert("Uspesno ste kupili majicu");
    }

    useEffect(() => {
        const fetchEvent = async () => {
            const response = await fetch(`http://localhost:4000/odeca/${routerPath}`)
            const json = await response.json()

            console.log(routerPath)
            if(response.ok) {
                setClothes(json)

                console.log(clothes)
            }
        }
    
        fetchEvent()
    },  [])

    return(
            
        <div className="upcoming-events" id='events'>
        <Navbar
         account={account}
         setAccount={setAccount}
        />

                    <div className="event-flex-div">
                        {clothes && <div className="clothes-right-side">
                            <h1 className="event-title">{clothes.title}</h1>
                            <img src={clothes.image_url} alt="" className="cloth-img" />
                            <p className="event-opis">{clothes.price}</p>
                                <button className="event-button" onClick={handleMessage}>Kupi</button>
                        </div>}
                    </div>
            </div>
    );

}

export default ClothesPage;