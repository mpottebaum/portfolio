import React from 'react'
import '../stylesheets/Home.css';

class Home extends React.Component {
    
    render() {
        return <div className='container'>
            <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/rJXdoiUqcwI"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    }
}

export default Home