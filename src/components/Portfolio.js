import React from 'react'
import Project from './Project'
import { projects } from '../content/projects'
import '../stylesheets/Portfolio.css'

class Portfolio extends React.Component {

    renderProjects = () => {
        return projects.map(project => <Project project={project} />)
    }

    render() {
        return <div id='portfolio' className='pf-container'>
            {this.renderProjects()}
        </div>
    }
}

export default Portfolio