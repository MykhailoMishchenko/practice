//Action creator
const selectSong = (song) => {
    //Return action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};

const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}

const removeSong = (song) => {
    return {
        type: "REMOVE_SONG",
        payload: song
    }
}

export {selectSong, addSong, removeSong};