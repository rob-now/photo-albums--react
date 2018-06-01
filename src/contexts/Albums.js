import React, {Component} from 'react'

const AlbumsContext = React.createContext()

export const AlbumsConsumer = AlbumsContext.Consumer

export class AlbumsProvider extends Component {

  state = {
    albums: [
      {
        id: 0,
        url: 'http://via.placeholder.com/800x600'
      },
      {
        id: 1,
        url: 'http://via.placeholder.com/800x600'
      },
      {
        id: 2,
        url: 'http://via.placeholder.com/800x600'
      },
      {
        id: 3,
        url: 'http://via.placeholder.com/800x600'
      }
    ]
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
        {albums => <Component {...props} albums={albums}/>}
      </AlbumsConsumer>
    )
  }

  AlbumsAwareComponent.displayName = `AlbumsAware(${Component.displayName || Component.name || 'Component'})`

  return AlbumsAwareComponent
}