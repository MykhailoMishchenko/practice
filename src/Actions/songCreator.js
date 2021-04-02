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

const removeSong = (title) => {
    return {
        type: "REMOVE_SONG",
        payload: title
    }
}

export {selectSong, addSong, removeSong};