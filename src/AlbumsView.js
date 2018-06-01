import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './AlbumsView.css'

const albums = [
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

class AlbumsView extends Component {
  render() {
    return (
      <Fragment>
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

export default AlbumsView