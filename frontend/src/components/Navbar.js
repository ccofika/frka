import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import { Link } from 'react-router-dom'

const Navbar = (props) => {

    useEffect(() => {
        AOS.init();
      }, [])


    const {account, setAccount} = props

    function handleLogOut() {
        setAccount('')
    }

    return(
        <div className="header" data-aos='fade-up' data-aos-duration="1200">
            <Link to="/" className='header-home-link'>
                <h1 className='header-text'>
                    HOME
                </h1>
            </Link>
            <Link to="/events">
                <h1 className='header-text'>
                    ŽURKE
                </h1>
            </Link>
            <Link to="/projectx">
                <h1 className='header-text' id='navbar-splitter'>
                    PROJECT X 
                </h1>
            </Link>
            <Link to="/odeca">
                <h1 className='header-text'>
                    CLOTHING
                </h1>
            </Link>
            <Link to="/usluge">
                <h1 className='header-text'>
                    USLUGE
                </h1>
            </Link>
            <Link to="/upitnik">
                <h1 className='header-text' id='navbar-splitter'>
                    KONTAKT
                </h1>
            </Link>
        </div>
    )
}

export default Navbar;