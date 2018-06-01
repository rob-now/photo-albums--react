import React, {Component} from 'react'
import albums from '../database/albums'
import photos from '../database/photos'

const AlbumsContext = React.createContext()

export const AlbumsConsumer = AlbumsContext.Consumer

export class AlbumsProvider extends Component {

  state = {
    albums,
    photos
  }

  render() {
    return (
      <AlbumsContext.Provider value={this.state}>
        {this.props.children}
      </AlbumsContext.Provider>
    )
  }
}

export function withAlbums(Component) {
  function AlbumsAwareComponent(props) {
    return (
      <AlbumsConsumer>
        {state =>
          <Component {...props} {...state}/>}
      </AlbumsConsumer>
    )
  }

  AlbumsAwareComponent.displayName = `AlbumsAware(${Component.displayName || Component.name || 'Component'})`

  return AlbumsAwareComponent
}