import React from 'react'

const Project = ({ project }) => {
    const renderTech = () => {
        return project.tech.map(blurb => <p>{blurb}</p>)
    }

    return <div>
        <iframe
            width="560"
            height="315"
            src={project.demo}
            frameborder="0"
            allowfullscreen>
        </iframe>
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.app ? <a href={project.app}>Live App</a> : null}
            <a href={project.github}>Github</a>
        </div>
        <div>
            <h2>Technologies</h2>
            {renderTech()}
        </div>
    </div>
}

export default Project