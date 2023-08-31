import './css/ProjectX.css'
import image from './../content/landingpage/projectdelta2.jpg'
import { useEffect } from 'react'
import Navbar from './../components/Navbar'
import { Link } from 'react-router-dom'

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
        <div className="projectx">
            <div className="scroll-container">
                <img src={image} alt="Horizontal Scroll Image" />
            </div>

            <div className="slike">
              
            <Link to="https://drive.google.com/drive/u/8/folders/1pJV_0Ml6d7lZa6O9uRQY7aX9JNtJI64S" target="_blank">
              <button className="slikelink">20.08.</button>
            </Link>
            <Link to="https://drive.google.com/drive/folders/1cG3Tl6KbHWqzvOMLIvLbxbcNtnTGt3YK?usp=sharing" target="_blank">
              <button className="slikelink">30.08.</button>
            </Link>
            </div>
        </div>
    )
}

export default ProjectX