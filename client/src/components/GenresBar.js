import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const GenresBar = observer(() => {
    const {movie} = useContext(Context)
    return (
        <ListGroup>
            {movie.genres.map(genre =>
            <ListGroup.Item key = {genre.id}>
                {genre.name}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenresBar;