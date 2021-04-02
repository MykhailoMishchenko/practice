import React from "react";
import {Table, Button} from "react-bootstrap"
import {connect} from 'react-redux';
import {selectSong, removeSong} from "../../Actions/songCreator"
import {v4 as uuidv4} from "uuid"

const MusicTable = ({ songs, selectSong }) => {
    let key = 1;
    return (
        <>
            <Table striped bordered className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name of Song</th>
                        <th>Duration</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.map(song => {
                            return (
                                <tr key={uuidv4()}>
                                    <td>{key++}</td>
                                    <td>{song.title}</td>
                                    <td>{song.duration}</td>
                                    <td className="td-btn">
                                        <Button 
                                            className="btn" 
                                            style={{backgroundColor: "#37bdf1"}}
                                            onClick={() => selectSong(song)}
                                            >Select</Button>{' '}
                                        <Button variant="danger">Delete <i class="far fa-trash-alt"></i></Button>{' '}
                                    </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

const mapStateToProps = (state) => ({
    songs: state.songs
});

export default connect(mapStateToProps, {
    selectSong: selectSong,
    removeSong
})(MusicTable);