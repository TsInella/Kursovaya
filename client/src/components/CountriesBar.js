import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row, Card, Form, ListGroup} from "react-bootstrap";

const CountriesBar = observer(() => {
    const {movies} = useContext(Context)
    return (
        <ListGroup>
            {movies.countries.map(countries =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={countries.id === movies.selectedCountrie.id}
                    onClick={() => movies.setSelectedCountrie(countries)}
                    key = {countries.id}
                >
                    {countries.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CountriesBar;