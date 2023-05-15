import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Card, Form} from "react-bootstrap";

const DirectorsBar = observer(() => {
    const {movies} = useContext(Context)
    return (
        <Form className="d-flex">
            {movies.directors.map(directors =>
            <Card
                style = {{cursor:'pointer'}}
                key = {directors.id}
                className="p-3"
                onClick={() => movies.setSelectedDirector(directors)}
                border={directors.id === movies.selectedDirector.id ? 'danger' : 'light'}
            >
                {directors.name}
            </Card>
            )}
        </Form>
    );
});

export default DirectorsBar;