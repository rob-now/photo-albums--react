import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './PhotoItem.css'

class PhotoItem extends Component {
  render() {
    const {photos} = this.props

    return (
      <Fragment>
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

export default PhotoItem