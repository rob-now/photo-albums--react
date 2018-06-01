import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class PhotosGridView extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/">
          <button>Go back to Albums</button>
        </Link>
        <h2>Photos grid view</h2>
      </Fragment>
    )
  }
}

export default PhotosGridView