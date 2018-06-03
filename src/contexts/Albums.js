import React, {Component} from 'react'
import '../components/main.css'

const AlbumsContext = React.createContext()

export const AlbumsConsumer = AlbumsContext.Consumer

let setIntervalId

export class AlbumsProvider extends Component {

  state = {
    albums: null,
    photos: null,
    defaultAlbumUrl: '/database/photos/defaultUrl/cristian-balu-a-405976-unsplash.jpg',
    defaultAlbumUrlAuthor: 'Photo by Cristian Băluță on Unsplash',
    fetching: false,
    error: null,
    backgroundColors: [
      'rgba(179, 199, 188, 0.3)',
      'rgba(246, 239, 231, 0.3)',
      'rgba(169, 166, 175, 0.3)',
      'rgba(132, 131, 135, 0.3)',
      'rgba(132, 141, 115, 0.3)',
      'rgba(155, 179, 233, 0.1)',
      'rgba(53,   87, 138, 0.2)',
      'rgba(135, 170, 211, 0.2)',
      'rgba(105,  90, 145, 0.2)',
      'rgba(147, 251, 198, 0.1)',
      'rgba(140, 189, 226, 0.3)',
      'rgba(142, 126, 207, 0.1)',
      'rgba(111, 111, 111, 0.2)',
      'rgba(116, 166, 145, 0.2)'
    ],
    selectedColor: 'rgba(179, 199, 188, 0.2)',
    colorIndex: 0,

    getRandomColor: (delta = 1) => {
      const color = this.state.backgroundColors[Math.floor(Math.random() * this.state.backgroundColors.length)]

      this.setState({
        selectedColor: color,
        colorIndex: this.state.colorIndex + delta
      })
    }
  }

  componentDidMount() {
    setIntervalId = setInterval(() => {
      this.state.getRandomColor()
    }, 8000)

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

  componentWillUnmount() {
    clearInterval(setIntervalId)
  }

  render() {
    document.body.classList.add('bodyBgColor')
    document.body.style.background = this.state.selectedColor

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