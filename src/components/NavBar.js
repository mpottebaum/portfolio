import React from 'react'
import { withRouter } from 'react-router-dom'
import '../stylesheets/NavBar.css';

class NavBar extends React.Component {
    handleClick = path => {
        this.props.history.push(path)
    }

    render() {
        return <div className='container'>
        <div className='nav' onClick={() => this.handleClick('/')}>
            <p>Home</p>
        </div>
        <div className='nav' onClick={() => this.handleClick('/about')}>
            <p>About</p>
        </div>
        <div className='nav' onClick={() => this.handleClick('/portfolio')}>
            <p>Portfolio</p>
        </div>
        <div className='nav' onClick={() => this.handleClick('/blog')}>
            <p>Blog</p>
        </div>
        <div className='nav' onClick={() => this.handleClick('/music')}>
            <p>Music</p>
        </div>
    </div>
    }
}

const NavBarWithRouter = withRouter(NavBar)

export default NavBarWithRouter