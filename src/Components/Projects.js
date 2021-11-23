import React, {useState} from 'react';
import projects_data from './projects_data'
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState(projects_data)

    const handleFilterCategory = (name) => {
        const new_array = projects_data.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(projects_data)}>All</div>
                <div onClick={() => handleFilterCategory('react')}>React</div>
                <div onClick={() => handleFilterCategory('Javascript')}>SQL</div>
                <div onClick={() => handleFilterCategory('node')}>Node</div>
                <div onClick={() => handleFilterCategory('html/css')}>HTML/CSS</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;