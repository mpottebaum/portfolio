import React from 'react'
import Album from './Album'
import { albums } from '../content/music'

class Music extends React.Component {
    constructor() {
        super()
        this.state = {
            genre: 'folk'
        }
    }

    handleClick = genre => {
        this.setState({
            genre: genre
        })
    }

    renderGallery = () => {
        return albums[this.state.genre].map(album => <Album album={album} />)
    }

    render() {
        return <div>
            <div className='music-navbar'>
                <div className='music-nav' onClick={() => this.handleClick('folk')}>
                    <p>Psychedelic Folk</p>
                </div>
                <div className='music-nav' onClick={() => this.handleClick('pop')}>
                    <p>Synth Pop</p>
                </div>
                <div className='music-nav' onClick={() => this.handleClick('electro')}>
                    <p>Electro Noise Clash</p>
                </div>
            </div>
            <div className ='music-gallery'>
                {this.renderGallery()}
            </div>
        </div>
    }
}

export default Music