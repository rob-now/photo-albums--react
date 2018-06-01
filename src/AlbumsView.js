import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './AlbumsView.css'

class AlbumsView extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Row>
            <Col md={4}>
              <img src="http://via.placeholder.com/800x600" className="img-responsive PhotoAlbums__Album" alt="Album 1"/>
            </Col>
            <Col md={4}>
              <img src="http://via.placeholder.com/800x600" className="img-responsive PhotoAlbums__Album" alt="Album 2"/>
            </Col>
            <Col md={4}>
              <img src="http://via.placeholder.com/800x600" className="img-responsive PhotoAlbums__Album" alt="Album 3"/>
            </Col>
            <Col md={4}>
              <img src="http://via.placeholder.com/800x600" className="img-responsive PhotoAlbums__Album" alt="Album 3"/>
            </Col>
          </Row>
        </Grid>
      </Fragment>
    )
  }
}

export default AlbumsView