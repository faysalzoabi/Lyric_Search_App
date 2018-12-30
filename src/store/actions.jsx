import axios from 'axios';

export const ADD_TRACKS = 'addTracks';
export const ADD_SELECTED_TRACK= 'addSelectedTrack'
export const ADD_LYRIC= 'addLyric'

export const addTracks = (tracks) => {
    return {
        type: ADD_TRACKS,
        payload: tracks
    }
}

export const addLyric = (lyric) => {
    return {
        type: ADD_LYRIC,
        payload: lyric
    }
}

export const addSelectedTrack = (track) => {
    return {
        type: ADD_SELECTED_TRACK,
        payload: track
    }
}


export const fetchData = () => (dispatch, getState) => {
    axios.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            // console.log(res.data)
            // this.setState({ track_list: res.data.message.body.track_list});
            dispatch(addTracks(res.data.message.body.track_list))
        })
        .catch(err=> console.log(err));
}

export const fetchSearchedData = (tracktitle) => (dispatch, getState) => {
        axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log('insearchfetch',res.data)
                dispatch(addTracks(res.data.message.body.track_list))
              })
            .catch(err=> console.log('Errorrr',err));
}

export const fetchLyric = (id) => (dispatch, getState) => {
    axios
    .get(
          `https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
            id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        )
    .then(res => {
          dispatch(addLyric(res.data.message.body.lyrics))
        })
    .catch(err => console.log(err));
}

export const fetchSpecificTrack = (id) => (dispatch, getState) => {
    axios.get(
        `https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}
        &apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        dispatch(addSelectedTrack(res.data.message.body.track))
      })
      .catch(err => console.log(err));
}