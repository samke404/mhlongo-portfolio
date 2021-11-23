import React from "react";
import linkedIn from './Components/linkedIn.png'
import git from './Components/git.png'
import twitter from './Components/twitter.png'
import resume from './Components/resume.pdf'
import Samke from './Components/Samke.jpg';
import resumeIcon from './Components/resumeIcon.png'
import pin from './Components/pin.png'

const Sidebar = () => {
     const handleEmailMe = () => {
        window.open("mailto:nmhlongo880@gmail.com")}
    return(
        <div className="sidebar">
            <img src={Samke} alt="Display_picture" className="sidebarImage"/>
            <div className="sidebarName"><b>Nonkululeko Mhlongo</b> </div>
            <div className="sidebarTitle">Software <span>Developer</span></div>
             <a href={resume} download="resume.pdf">
                <div className="sidebarItems">
                    <img src={resumeIcon} alt="resume" className="sidebarIcon" /> Download Resume
                </div>
            </a>
            <figure className="sidebarSocialIcon">
                <a href="https://www.linkedin.com/in/nonkululeko-mhlongo-74192716a/"><img src={linkedIn} alt="linkedIn" className="sidebarIcon mr-3" /></a>
                <a href="https://twitter.com/Sxmke_m"><img src={twitter} alt="twitter" className="sidebarIcon" /></a>
            </figure>
            <div className="contact">
                <div className="sidebarItems">
                    <a href="https://github.com/dashboard"><img src={git} alt="gitHub" className="sidebarIcon"/>github</a>
                </div>

                <div className="location">
                    <img src={pin} alt="location" className="sidebarIcon" />
                    Midrand, Johannesburg</div>
                <div className="sidebarItems">nmhlongo880@gmail.com</div>
                <div className="sidebarItems">0734470880</div>
            
            </div>
            <div className="sidebarItems sidebarEmail" onClick={handleEmailMe}>email me</div>




        </div>

)
}
export default Sidebar;