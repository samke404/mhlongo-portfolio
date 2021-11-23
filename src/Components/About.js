import React from 'react';
import computer from './computer.png';
import repair from './repair.png';
import algo from './algo.png';
import puzzle from './puzzle.jpeg';
import operatingSyt from './operatingSys.jpg';

import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using C++ and SQL",
    },
    {
        icon: operatingSyt,
        title: "Operating Systems",
        about: "MacOs, Windows, Linux"
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "Participate in Hackerthons, innovative, analytical thinker, competitive but also a team player"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using canva"
    },
    {
        icon: computer,
        title: "Hardware",
        about: "Deep knowlegde on computer hardware, troubleshooting, operating systems, security, networking, virtualization cloud computing"
    },
]
const About = () => {
    return(
        <div className="about">
            <h6 className="aboutIntro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
                I’ve been doing some research to learn more about your company, and I am most impressed by your goals and the work you’ve been doing 
                to reach them. I’ve been inspired by your company’s brand, style, and tone. I read that the work environment is amazing and the company 
                culture is fun and dynamic. There is a strong teaching culture that allows employees to learn and grow their skills fast. it’s clear that many of
                 my professional goals align with the company’s purpose. Because of this, I think I would be a great asset to this already incredible team. 
                 I am confident that with my schooling experience, willingness to learn and quick adaptability, I can apply what I have learned to this interesting and 
                 exciting sector. I am a meticulous, analytical and would welcome the challenge of joining and adding value to your company.
            </h6>
            <div className="container aboutContainer">
                <h6 className="aboutHeading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>



    );
};

export default About;