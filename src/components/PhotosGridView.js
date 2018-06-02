import React, {Component, Fragment} from 'react'
import PhotoItem from "./PhotoItem";
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
        <h1>Photos grid view</h1>
        <PhotoItem {...this.props}/>
      </Fragment>
    )
  }
}

export default withAlbums(PhotosGridView)