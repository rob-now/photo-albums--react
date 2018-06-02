import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './PhotoItem.css'
import './main.css'

class PhotoItem extends Component {

  isPhotoIdMatching = photo =>
    photo.albumId === parseInt(this.props.match.params.albumId, 10)

  render() {
    const {photos} = this.props

    return (
      <Fragment>
        <Grid>
          <Row>
            {
              photos && photos.some(
                photo =>
                  this.isPhotoIdMatching(photo)
              ) ? (
                  photos.filter(
                    photo =>
                      this.isPhotoIdMatching(photo)
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
                              className="img-responsive PhotosGridView__Photo"
                              alt={`Photo ${id + 1}`}
                            />
                          </Col>
                      )
                  )
                ) :
                <div className="PhotosGridView__NoPhotosMessage">
                  <h2>Currently there are no photos in this album.</h2>
                </div>


            }
          </Row>
        </Grid>
      </Fragment>
    )
  }
}

export default PhotoItem