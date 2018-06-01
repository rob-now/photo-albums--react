import React, {Component, Fragment} from 'react'

class AlbumsView extends Component {
  render() {
    return (
      <Fragment
        className="PhotoAlbums"
      >
        <div className="PhotoAlbums__Album">Album 1</div>
        <div className="PhotoAlbums__Album">Album 2</div>
        <div className="PhotoAlbums__Album">Album 3</div>
      </Fragment>
    )
  }
}

export default AlbumsView