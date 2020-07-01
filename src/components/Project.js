import React from 'react'
import '../stylesheets/Project.css'

const Project = ({ project }) => {
    const renderTech = () => {
        return project.tech.map(blurb => <p>{blurb}</p>)
    }

    const renderBlogs = () => {
        return project.blogs.map(blog => {
                return <a href={blog.url}><h3>{blog.title}</h3></a>
            })
 
    }

    return <div className='pro-container'>
        <div className='pro-top'>
            
            <div className='pro-descrip'>
                <h1>{project.title}</h1>
                <div className='pro-links'>
                    {project.app ? <a href={project.app}>Live App</a> : null}
                    <a href={project.github}>Github</a>
                </div>
                <p>{project.description}</p>
                {
                    project.blogs ?
                    <div>
                        <p>Blogs about this project:</p>
                        {renderBlogs()}
                    </div>
                    :
                    null
                }
            </div>
            <iframe
                width="560"
                height="315"
                src={project.demo}
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
        <div>
            <h2>Technologies</h2>
            {renderTech()}
        </div>
    </div>
}

export default Project