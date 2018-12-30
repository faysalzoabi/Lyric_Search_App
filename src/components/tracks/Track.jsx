import React, { Component } from 'react'
import {Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchSpecificTrack } from '../../store/actions';
import { connect } from 'react-redux';

class Track extends Component {
  
  handleClick = (id) => {
    this.props.dispatch(fetchSpecificTrack(id))
  }

  render(){
    return (
      <Col xs={12} md={6}>
      <div className="card">
        <h4>{this.props.track.artist_name}</h4>
        <strong><i className="fas fa-play"></i>Track</strong>: {this.props.track.track_name}
        <br/>
        <strong><i className="fas fa-compact-disc"></i>Album</strong>: {this.props.track.album_name}
        <br/>
        <br/>
        <Link to={`lyrics/track/${this.props.track.track_id}`}>
          {/* <Button onClick={() => this.handleClick(this.props.track.track_id)} bsStyle="primary"><i className="fas fa-chevron-right"></i> View Lyrics</Button> */}
          <Button bsStyle="primary"><i className="fas fa-chevron-right"></i> View Lyrics</Button>
        </Link>
      </div>
      </Col>
    )

  }
  
}

export default connect()(Track)
