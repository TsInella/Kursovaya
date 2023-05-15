import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Form, Row} from "react-bootstrap";
import MovieItem from "./MovieItem";

const MList = observer(() => {
    const {movies} = useContext(Context)

    return (
        <Row className = "d-flex">
            {movies.movies.map(movies =>
                <MovieItem key={movies.id} movies={movies}/>
            )}
        </Row>
    );
});

export default MList;