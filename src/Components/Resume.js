import React from 'react';
import react from './react.png';
import python from './python.png';
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '45'
    },
    {
        icon: react,
        name: 'Java',
        level: '50'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '50'
    },
    {
        icon: react,
        name: 'C++',
        level: '80'
    },
    {
        icon: react,
        name: 'Javascript',
        level: '60'
    }
]

const tools = [
    {
        icon: react,
        name: 'VSCode',
        level: '70'
    },
    {
        icon: react,
        name: 'XCode',
        level: '45'
    },
    {
        icon: react,
        name: 'SQL',
        level: '80'
    },
    {
        icon: react,
        name: 'PL/SQL',
        level: '70'
    },

]

const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resumeCardHeading">
                        Education
                    </h4>
                    <div className="resumeBodyCard">
                        <h5 className="resumeCardTitle">
                            Software Development
                        </h5>
                        <p className="resume-card__name">
                           Tshwane University Of Technology(2021)
                        </p>
                        <p className="resume-card__details">I am currently a final year student at the Tshwane University of Technology enrolled for a National Diploma in Information Technology majoring in Software Development</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resumeCardHeading">
                        Experience
                    </h4>
                    <div className="resumeBodyCard">
                        <h5 className="resumeCardTitle">
                           Casual
                        </h5>
                        <p className="resume-card__name">
                            Ackermans(2015)
                        </p>
                        <p className="resume-card__details">I worked as a casual at Ackerams focusing on retail, merchandising, customer service</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-languageHeading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-languageHeading">
                        IDE & Databse
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Resume;