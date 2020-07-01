import React from 'react'
import '../stylesheets/Contact.css'

const Contact = () => {
    return <div className='contact-container'>
        <div className='contact-info'>
            <p className='contact-text name'>Mike Pottebaum</p>
            <div className='contact-details'>
                <p className='contact-text email'>(952) 913-6908 | mpottebaum@gmail.com</p>
            </div>
        </div>
        <div className='contact-links'>
            <div className='git'>
                <a href='https://github.com/mpottebaum' target="_blank"><img className='link-img' src='/logos/GitHub.png' /></a>
            </div>
            <div className='linkedin'>
                <a href='https://www.linkedin.com/in/mike-pottebaum/' target="_blank"><img className='link-img' src='/logos/linkedin.png' /></a>
            </div>
        </div>
    </div>
}

export default Contact