import React from "react";
import {connect} from 'react-redux';

const Song = ({selectedSong}) => {
    if(!selectedSong){
        return (
            <div className="song">
                <h2>Select song</h2>
                <p><strong>Duration:</strong></p>
            </div>
        )
    }
        return (
            <div className="song">
                <h2>{selectedSong.title}</h2>
                <p><strong>Duration: {selectedSong.duration}</strong></p>
            </div>
        );
};

const mapStateToProps = (state) => ({
    selectedSong: state.selectedSong
})

export default connect(mapStateToProps)(Song)