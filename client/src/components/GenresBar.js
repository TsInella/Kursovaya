import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const GenresBar = observer(() => {
    const {movies} = useContext(Context)
    return (
        <ListGroup>
            {movies.genres.map(genres =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={genres.id === movies.selectedGenre.id}
                    onClick={() => movies.setSelectedGenre(genres)}
                    key = {genres.id}
                >
                    {genres.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenresBar;