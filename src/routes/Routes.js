import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'

import AlbumsView from '../components/AlbumsView'
import PhotosGridView from '../components/PhotosGridView';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={AlbumsView}/>
        <Route path="/album/:albumName?/:albumId" component={PhotosGridView}/>
      </Fragment>
    )
  }
}

export default Routes