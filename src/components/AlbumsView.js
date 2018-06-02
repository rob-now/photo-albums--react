import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './main.css'
import './AlbumsView.css'
import {withAlbums} from "../contexts/Albums";

class AlbumsView extends Component {

  render() {
    const {albums} = this.props

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
                        {albumName || `Photo album ${id + 1}`}
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