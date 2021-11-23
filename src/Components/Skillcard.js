import React from 'react';

const Skillcard = ({ skill: { icon, title, about } }) =>
    <div className="col-lg-6">
        <div className="skillCard">
            <img src={icon} alt="icon" className="skillcardIcon" />
            <div className="skillcardBody">
                <h6 className="skillcardtitle">{title}</h6>
                <p className="skillcardcontent">{about}</p>
            </div>
        </div>
    </div>

export default Skillcard;