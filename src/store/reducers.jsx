import { ADD_TRACKS, ADD_SELECTED_TRACK, ADD_LYRIC} from './actions';

const initState = {
    track_list:[],
    track:{},
    lyrics:{},
    heading:'Top 10 Tracks'
};


const reducer = (state = initState, action) => {
    console.log('in reducer', action.payload)
    switch(action.type){
        case ADD_TRACKS:
            // const newtracks = [...state.track_list, ...action.payload]
            const newtracks = [...action.payload]
            console.log('in reducer tracks', newtracks)
            return{
                ...state,
                track_list: newtracks
            }
        case ADD_SELECTED_TRACK:
            const newtrack =action.payload
            return{
                ...state,
                track:newtrack
            }
        case ADD_LYRIC:
            const newlyric = action.payload
            return{
                ...state,   
                lyrics:newlyric
            }
        default:
            return state
    }
}

export default reducer

