import React from 'react'
import About from './About'
import Portfolio from './Portfolio'
import '../stylesheets/Home.css';

class Home extends React.Component {
    
    render() {
        return <div className='home-container'>
            <About />
            <Portfolio />
        </div>
    }
}

export default Home