import React, {Component, Fragment} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import './AlbumsView.css'
import {withAlbums} from "./contexts/Albums";

class AlbumsView extends Component {

  render() {
    const {albums} = this.props

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
                      onClick={() =>
                        this.props.history.push(`/album/${id}`)}
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