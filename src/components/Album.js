import React from 'react'

const Album = props => {
    const { album } = props
    return <iframe
            style={{border: 0, width: '300px', height: '420px'}}
            src={`https://bandcamp.com/EmbeddedPlayer/album=${album.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/`}
            seamless>
                <a href={album.url}>
                    {album.text}
                </a>
            </iframe>

}

export default Album