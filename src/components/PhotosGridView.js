import React, {Component} from 'react'
import PhotoItem from "./PhotoItem";
import './main.css'
import './PhotosGridView.css'
import 'font-awesome/css/font-awesome.min.css'
import {withAlbums} from '../contexts/Albums';

class PhotosGridView extends Component {

  handleGoBackToAlbums = () =>
    this.props.history.push('/')

  render() {
    const {albumId, albumName} = this.props.match.params

    return (
      <div className="fadeIn">
        <h1>
          <i
            className="fas fa-arrow-circle-left"
            onClick={this.handleGoBackToAlbums}
          >&nbsp;</i>
          <span>
            {
              albumName || `Album ${parseInt(albumId, 10) + 1}`
            }
          </span>
        </h1>
        <PhotoItem {...this.props}/>
      </div>
    )
  }
}

export default withAlbums(PhotosGridView)