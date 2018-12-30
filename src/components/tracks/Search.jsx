import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {fetchSearchedData} from '../../store/actions';

class Search extends Component {

  state = {
      trackTitle:''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  findTrack = (e) => {
    e.preventDefault();
    console.log('stateeee', this.state.trackTitle)
    this.props.dispatch(fetchSearchedData(this.state.trackTitle))
  }

  render() {
    return (
      <div className="card main">
        <h1 className="">
            <i className="fas fa-music"></i> Search For A Song
        </h1>
        <p>Get the lyrics for any song</p>

        <form onSubmit={this.findTrack}>
            <FormGroup
                controlId="formBasicText"
            >
            <FormControl
                type="text"
                value={this.state.trackTitle}
                placeholder="Song Title..."
                name="trackTitle"
                onChange={this.handleChange}
            />
            <FormControl.Feedback />

            </FormGroup>
            <Button className="searchButton" bsStyle="primary" type="submit">Get Track Lyrics</Button>
      </form>
      </div>
    )
  }
}

export default connect()(Search)
