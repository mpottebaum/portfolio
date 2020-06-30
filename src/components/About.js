import React from 'react'
import '../stylesheets/About.css'

class About extends React.Component {
    render() {
        return <div className='about-container'>
            <div className='about-box'>
                <p>Full Stack Web Developer</p>
                <p>Writer</p>
                <p>Musician</p>
            </div>
            <div className='pf-box'>
                <p className='pf-text'>PORTFOLIO</p>
                <img className='pf-arrow' src='/down-arrow.png' />
            </div>
        </div>
    }
}

export default About