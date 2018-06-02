import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './AlbumsView.css'
import './main.css'
import {withAlbums} from "../contexts/Albums";

class AlbumsView extends Component {

  render() {
    const {albums} = this.props

    return (
      <Fragment>
        <h1>My photo albums</h1>
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
                      className={`img-responsive PhotoAlbums__Album--${id}`}
                      alt={`Album ${id + 1}`}
                    />
                    <div
                      className="PhotoAlbums__Album--Description--Container"
                      onClick={() =>
                        this.props.history.push(`/album/${id}`)}
                    >
                      <p
                        className="PhotoAlbums__Album--Description"
                      >
                        Photo album {id + 1}
                      </p>
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