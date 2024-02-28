import React, {  useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";

import './Projects.css'
import SingleProject  from '../../component/Projects/SingleProject/SingleProject';
import  projectsData  from '../../Data/projectData'
import ProjectPlayer from '../../component/Projects/ProjectPlayer/ProjectPlayer';

function ProjectPage() {

    const [search] = useState('')

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
        <div className="projectPage" style={{backgroundColor: "#89abe3ff"}}>
            <Helmet>
                <title>SSR_Portfolio</title>
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:"#ea738dff"}}>
                <Link to="/">
                        <AiOutlineHome className="home"/>
                </Link>
                <h1 style={{color: "#89abe3ff"}}>Projects</h1>
            </div>
           <div className="projectPage-container">
               <div className="project-container">
                   <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(project => (
                            <SingleProject
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image} 
                            />
                        ))}
                   </Grid>
               </div>
           </div>    
        </div>
        <ProjectPlayer/>
        </>
    )
}

export default ProjectPage
