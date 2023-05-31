import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FMList from "../components/FMList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchMovies} from "../http/moviesAPI";
import Pages from "../components/Pages";

const Favourites = observer(() => {
    const {movies} = useContext(Context)

    return (
        <Container >
            <h1 className="display-2 pt-4 pb-4 pr-4 text-success"><strong>Любимое</strong></h1>
            <Row className = "mt-2">

                <Col md={12}>
                    <FMList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Favourites;