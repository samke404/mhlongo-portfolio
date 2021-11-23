import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [active,setActive] = useState(' ')
    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')

    }, [active])
   
    
    return(
        <div className="navbar" >
        
            <div className="navbarActive">
                {active}
            </div>
            <div className="navbarItems">
                {active !== 'About' &&
                <Link to="/">
                <div className="navbarItem" onClick={() => setActive('About')}> About </div>
                 </Link>
                 }
                 { 
                 active !== 'Resume' ?
                 <Link to="/resume">
                  <div className="navbarItem" onClick={() => setActive('Resume')}> Resume</div>
                 </Link> : null
                }
                  { 
                  active !== 'Projects' && 
                  <Link to="/projects">
                      <div className="navbarItem" onClick={() => setActive('Projects')}> Projects</div>
                  </Link>}

            </div>






       
        </div>
    );
}

export default Navbar;