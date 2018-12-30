import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../Layout/Spinner'
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Moment from 'react-moment';
export class Lyric extends Component {

  state = {
    lyrics:{},
    track:{},
  };

  componentDidMount(){
        axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({ lyrics: res.data.message.body.lyrics});
                return axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`);
              })
            .then(res => {
             
              this.setState({ track: res.data.message.body.track });
              
            })
            .catch(err=> console.log('Errorrr',err));
    }

  render() {
      console.log('instatelyr', this.state.lyrics)
      console.log('instatetrc', this.state.track)
    
    const { lyrics } = this.state;
    const { track } = this.state;
    console.log('track', track)
    if(track === undefined ||  
      lyrics === undefined || 
      Object.keys(track).length === 0 || 
      Object.keys(lyrics).length === 0
      ) {
        return <Spinner/>
      } else {
        return (
        <div>
            <Link to="/">
                <Button className="homebutton" bsStyle="primary">Go Back</Button>
            </Link>

            <div className="card">
              {track.track_name} by <strong>{track.artist_name}</strong>
              <div className="cardlyric">
              <p>{lyrics.lyrics_body}</p>
              </div>
            </div>

            <ListGroup>
                <ListGroupItem> <strong>Album ID</strong>: {track.album_id}</ListGroupItem>
                <ListGroupItem>
                    <strong>Song Genre</strong>:{' '}
                    {track.primary_genres.music_genre_list.length === 0 ? 'NO GENRE AVAILABLE' :track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                </ListGroupItem>
                <ListGroupItem>
                    <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                </ListGroupItem>
                <ListGroupItem>
                    <strong>Release Date</strong>: <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
                </ListGroupItem>
            </ListGroup>
        </div>
        )
      }

  }
}

export default Lyric
