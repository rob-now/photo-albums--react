import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './AlbumsView.css'
import {withAlbums} from "./contexts/Albums";

class AlbumsView extends Component {

  handleGoToPhotosGrid = () =>
    this.props.history.push('/photos-grid')

  render() {
    const {albums} = this.props.albums

    return (
      <Fragment>
        <h2>Albums</h2>
        <Grid>
          <Row>
            {
              albums && albums.map(
                ({id, url}) =>
                  <Col
                    key={id}
                    md={4}
                  >
                    <img
                      src={url}
                      className="img-responsive PhotoAlbums__Album"
                      alt={`Album ${id + 1}`}
                      onClick={this.handleGoToPhotosGrid}
                    />
                  </Col>
              )
            }
          </Row>
        </Grid>
      </Fragment>
    )
  }
}

export default withAlbums(AlbumsView)