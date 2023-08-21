import './css/ProjectX.css'
import image from './../content/landingpage/project-delta.jpg'
import { useEffect } from 'react'
import Navbar from './../components/Navbar'

const ProjectX = () => {

    useEffect(() => {
        const handleOrientationChange = () => {
          if (window.innerWidth <= 1000) {
            if (window.orientation === 90 || window.orientation === -90) {
              alert('Please rotate your device to landscape mode for horizontal scrolling.');
            }
          }
        };
    
        handleOrientationChange();
    
        window.addEventListener('orientationchange', handleOrientationChange);
    
        // Handle scroll with mouse scrollwheel
        const container = document.querySelector('.scroll-container');
        const SCROLL_SENSITIVITY = 1; // Adjust the scroll sensitivity as needed
    
        const handleScroll = (event) => {
          container.scrollLeft += event.deltaY / SCROLL_SENSITIVITY;
          event.preventDefault();
        };
    
        container.addEventListener('wheel', handleScroll);
    
        return () => {
          window.removeEventListener('orientationchange', handleOrientationChange);
          container.removeEventListener('wheel', handleScroll);
        };
      }, []);

    return(
        <div className="projectx">
            <div className="scroll-container">
                <img src={image} alt="Horizontal Scroll Image" />
            </div>
        </div>
    )
}

export default ProjectX