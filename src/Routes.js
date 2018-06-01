import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import AlbumsView from './AlbumsView'

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={AlbumsView}/>
      </Fragment>
    )
  }
}

export default Routes