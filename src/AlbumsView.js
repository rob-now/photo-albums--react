import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

class AlbumsView extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Row>
            <Col md={4}>
              <div className="PhotoAlbums__Album">Album 1</div>
            </Col>
            <Col md={4}>
              <div className="PhotoAlbums__Album">Album 2</div>
            </Col>
            <Col md={4}>
              <div className="PhotoAlbums__Album">Album 3</div>
            </Col>
          </Row>
        </Grid>
      </Fragment>
    )
  }
}

export default AlbumsView