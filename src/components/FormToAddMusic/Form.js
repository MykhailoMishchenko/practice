import React, {useState} from "react";
import {Form, Button, Col, InputGroup, FormControl} from "react-bootstrap";
import {connect} from "react-redux";
import {addSong} from "../../Actions/songCreator"

const FormAdd = ({addSong}) => {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");
    return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        Name of Song
                    </Form.Label>
                    <Form.Control
                        value={name}
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Name of Song"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                        Duration
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                        </InputGroup.Prepend>
                        <FormControl 
                            value={duration}
                            id="inlineFormInputGroup" 
                            placeholder="Duration"
                            onChange={(e) => setDuration(e.target.value)} />
                    </InputGroup>
                </Col>
                <Col xs="auto"></Col>
                <Col xs="auto">
                    <Button 
                        disabled={!name.length || !duration.length}
                        type="submit" 
                        className="mb-2" 
                        style={{backgroundColor: "#37bdf1"}}
                        onClick={(e) => {
                            e.preventDefault();
                            addSong({
                                title: name,
                                duration: duration
                            });
                            setName(""); setDuration("")
                        }}>
                        Submit
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    songs: state.songs,
});


export default connect(mapStateToProps, {
    addSong
})(FormAdd);