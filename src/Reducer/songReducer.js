import {combineReducers} from 'redux'

const SONGS = [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'I want it that way', duration: '1:45'}
]

const songReducer = (songs = SONGS, action) => {
    if(action.type === "ADD_SONG"){
        return [...songs, action.payload]
    }
    else if(action.type === "REMOVE_SONG"){
        return songs.filter(name => name.title !== action.payload.title);
    }
    return songs;
}

const selectSongReducer = (selectSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectSongReducer,
});