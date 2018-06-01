import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import AlbumsView from './AlbumsView'
import PhotosGridView from "./PhotosGridView";

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={AlbumsView}/>
        <Route path="/photos-grid" component={PhotosGridView}/>
      </Fragment>
    )
  }
}

export default Routes