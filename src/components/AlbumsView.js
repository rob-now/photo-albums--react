import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './main.css'
import './AlbumsView.css'
import {withAlbums} from "../contexts/Albums";

class AlbumsView extends Component {

  render() {
    const {albums, photos} = this.props
    console.log('photos', photos)
    let currentPhotosArrayLength = 0

    return (
      <Fragment>
        <h1 className="fadeIn">My photo albums</h1>
        <Grid>
          <Row>
            {
              albums && albums.map(
                ({id, albumName, url}) =>
                  <Col
                    key={id}
                    md={4}
                    className="bs--col"
                  >
                    <div className="PhotoAlbums__Album--Container">
                      <img
                        src={
                          photos && photos.filter(
                            photo => photo.albumId === id
                          ).map(
                            ({photos}) => {
                              currentPhotosArrayLength = photos.length
                              return photos.map(
                                photo =>
                                  photo.url
                              )
                            }
                          ).reduce(
                            (total, next) =>
                              total.concat(next), []
                          )[Math.floor(Math.random() * currentPhotosArrayLength)]
                        }
                        className={`img-responsive PhotoAlbums__Album--${id}`}
                        alt={`Album ${id + 1}`}
                      />
                      <div
                        className="PhotoAlbums__Album--Description--Container"
                        onClick={() =>
                          albumName !== "" ?
                            this.props.history.push(`/album/${albumName}/${id}`) :
                            this.props.history.push(`/album/${id}`)
                        }
                      >
                        <p
                          className="PhotoAlbums__Album--Description"
                        >
                          {albumName || `Photo album ${id + 1}`}
                        </p>
                      </div>
                    </div>
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