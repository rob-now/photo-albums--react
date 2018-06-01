import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './PhotosGridView.css'
import {withAlbums} from "./contexts/Albums";

class PhotosGridView extends Component {

  handleGoBackToAlbums = () =>
    this.props.history.push('/')

  render() {
    const {photos} = this.props

    return (
      <Fragment>
        <button
          onClick={this.handleGoBackToAlbums}
        >
          Go back to Albums
        </button>
        <h2>Photos grid view</h2>
        <Grid>
          <Row>
            {
              photos.filter(
                photo =>
                  photo.albumId === parseInt(this.props.match.params.albumId, 10)
              ).map(
                ({photos}) =>
                  photos.map(
                    ({id, url}) =>
                      <Col
                        key={id}
                        md={4}
                      >
                        <img
                          src={url}
                          className="img-responsive PhotosGridView_Photo"
                          alt={`Photo ${id + 1}`}
                        />
                      </Col>
                  )
              )

            }
          </Row>
        </Grid>
      </Fragment>
    )
  }
}

export default withAlbums(PhotosGridView)