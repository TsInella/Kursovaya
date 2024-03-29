import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Card, Form, ListGroup} from "react-bootstrap";

const DirectorsBar = observer(() => {
    const {movies} = useContext(Context)
    return (
        <ListGroup>
            {movies.directors.map(directors =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={directors.id === movies.selectedDirector.id}
                    onClick={() => movies.setSelectedDirector(directors)}
                    key = {directors.id}
                >
                    {directors.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default DirectorsBar;