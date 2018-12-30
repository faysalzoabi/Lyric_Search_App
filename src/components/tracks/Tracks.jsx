import React, { Component } from 'react';
import Spinner from '../Layout/Spinner';
import Track from './Track';
import { connect } from 'react-redux';
import {Row} from 'react-bootstrap';
import Search from './Search';

class Tracks extends Component {
  render() {
    return (
        <div>
            <Row className="show-grid">
                    <Search/>
                    {this.props.tracklists.length === 0 ? (
                         <Spinner/>
                        ) : (
                        this.props.tracklists.map(item => (
                        <Track key={item.track.track_id} track={item.track}/>
                    ))
            )}

               
            </Row>
            
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        tracklists : state.track_list
    }
}

export default connect(mapStateToProps)(Tracks)
