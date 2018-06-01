import React, {Component, Fragment} from 'react'
import {withAlbums} from "../contexts/Albums";
import PhotoItem from "./PhotoItem";


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
        <h2>Photos grid view</h2>
        <PhotoItem {...this.props}/>
      </Fragment>
    )
  }
}

export default withAlbums(PhotosGridView)