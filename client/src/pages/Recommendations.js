import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenresBar from "../components/GenresBar";
import DirectorsBar from "../components/DirectorsBar";
import CountriesBar from "../components/CountriesBar";
import PeriodsBar from "../components/PeriodsBar";
import MList from "../components/MList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCountries, fetchDirectors} from "../http/moviesAPI";

const Recommendations = observer(() => {
    const {movies} = useContext(Context)
    useEffect(()=>{
        fetchCountries().then(data => movies.setCountries(data))
        fetchDirectors().then(data => movies.setDirectors(data))

    }, [])

    return (
        <Container >
            <Row className = "mt-2">
                <Col md={3}>
                    <GenresBar/>
                </Col>
                <Col md={3}>
                    <DirectorsBar/>
                </Col>
                <Col md={3}>
                    <CountriesBar/>
                </Col>
                <Col md={3}>
                    <PeriodsBar/>
                </Col>
                <Col md ={3}>

                </Col>
                <Col md={9}>
                    <MList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Recommendations;