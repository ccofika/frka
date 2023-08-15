import './css/ProjectX.css'
import image from './../content/landingpage/siteImage.jpg'
import { useEffect, Component} from 'react'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

const ProjectX = () => {

    useEffect(() => {
    
        // Handle scroll with mouse scrollwheel
        const container = document.querySelector('.scroll-container');
        const SCROLL_SENSITIVITY = 1; // Adjust the scroll sensitivity as needed
    
        const handleScroll = (event) => {
          container.scrollLeft += event.deltaY / SCROLL_SENSITIVITY;
          event.preventDefault();
        };
    
        container.addEventListener('wheel', handleScroll);
    
        return () => {
          container.removeEventListener('wheel', handleScroll);
        };
      }, []);

    return(
      <DeviceOrientation className="allrounder">
        <Orientation orientation='portrait' alwaysRender={false}>
          <div className="portret-window">
            <p className='rotate-phone-text'>Rotiraj telefon</p>
          </div>
        </Orientation>

        <Orientation orientation='landscape' alwaysRender={false}>
        <div className="projectx">
            <div className="scroll-container">
                <img src={image} alt="Horizontal Scroll Image" />
            </div>
        </div>
        
        </Orientation>
        

      </DeviceOrientation>

        
    )
}

export default ProjectX