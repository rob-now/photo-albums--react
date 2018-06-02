import React, {Component, Fragment} from 'react'
import PhotoItem from "./PhotoItem";
import './PhotosGridView.css'
import {withAlbums} from "../contexts/Albums";

class PhotosGridView extends Component {

  handleGoBackToAlbums = () =>
    this.props.history.push('/')

  render() {
    return (
      <Fragment>
        <button
          onClick={this.handleGoBackToAlbums}
        >
          Go back to Albums
        </button>
        <h1>Photos from <span className="PhotosGridView__AlbumNumber">album {parseInt(this.props.match.params.albumId, 10) + 1}</span></h1>
        <PhotoItem {...this.props}/>
      </Fragment>
    )
  }
}

export default withAlbums(PhotosGridView)