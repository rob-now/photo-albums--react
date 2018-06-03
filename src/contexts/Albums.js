import React, {Component} from 'react'

const AlbumsContext = React.createContext()

export const AlbumsConsumer = AlbumsContext.Consumer

export class AlbumsProvider extends Component {

  state = {
    albums: null,
    photos: null,
    defaultAlbumUrl: '/database/photos/defaultUrl/cristian-balu-a-405976-unsplash.jpg',
    defaultAlbumUrlAuthor: 'Photo by Cristian Băluță on Unsplash',
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })

    fetch(
      process.env.PUBLIC_URL + '/database/albums.json'
    ).then(
      response => response.json()
    ).then(
      albums => this.setState({
        albums: albums,
        fetching: false
      })
    ).catch(
      error => this.setState({
        error: error,
        fetching: false
      })
    )

    fetch(
      process.env.PUBLIC_URL + '/database/photos.json'
    ).then(
      response => response.json()
    ).then(
      photos => this.setState({
        photos: photos,
        fetching: false
      })
    ).catch(
      error => this.setState({
        error: error,
        fetching: false
      })
    )
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