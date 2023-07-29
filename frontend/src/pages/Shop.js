import { useEffect, useState } from 'react'
import './css/Shop.css'
import { Link } from 'react-router-dom'

import Navbar from './../components/Navbar'


const Shop = (props) => {

    const {routerPath, setRouterPath, clothesPath, setClothesPath, account, setAccount} = props

    const [clothes, setClothes] = useState(null)

    function handleSendingBackId(id) {
        setClothesPath(`/odeca/${id}`)
        setRouterPath(id)
    }

    useEffect(() => {
        const fetchClothes = async () => {
            const response = await fetch('http://localhost:4000/odeca/')
            const json = await response.json()

            if(response.ok) {
                setClothes(json)
            }
        }

        fetchClothes()
    }, [])
    return(
        <div className="clothing">
            <Navbar />
            {/* <div className="cloth-flex"> 
            {clothes && clothes.map((cloth) => (
                <div className="cloth-card">
                    <Link className='single-cloth-card' to={cloth._id} onClick={() => handleSendingBackId(cloth._id)}>
                        <div className="title-overlay">
                            <h1 className="cloth-title">{cloth.title}</h1>
                        </div>
                        <img src={cloth.image_url} alt="" className="cloth-img" />
                        <p className="cloth-price">{cloth.price}rsd</p>
                    </Link>
                </div>
            ))}
            </div>
            */}
        </div>
    )
}

export default Shop;