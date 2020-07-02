import React from 'react'
import '../stylesheets/About.css'

class About extends React.Component {
    render() {
        return <div className='about-container'>
            <p className='about-text'>
                Text right here. Got that good text right here. Oh yeah, you know there's gonna be some good stuff here, yeah.
                Better believe it, buddy. You wanted some text, huh? You got it. Fresh, hot text.
            </p>
            <img className='about-img' src='/photos/me.jpg' />
        </div>
    }
}

export default About