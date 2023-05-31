import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenresBar from "../components/GenresBar";
import DirectorsBar from "../components/DirectorsBar";
import CountriesBar from "../components/CountriesBar";
import PeriodsBar from "../components/PeriodsBar";
import MList from "../components/MList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCountries, fetchDirectors, fetchGenres, fetchMovies, fetchPeriods} from "../http/moviesAPI";
import Pages from "../components/Pages";

const Recommendations = observer(() => {
    const {movies} = useContext(Context)
    useEffect(()=>{
        fetchCountries().then(data => movies.setCountries(data))
        fetchDirectors().then(data => movies.setDirectors(data))
        fetchGenres().then(data => movies.setGenres(data))
        fetchPeriods().then(data => movies.setPeriods(data))
        fetchMovies(null, null, null, null, 1, 2).then(data => {
            movies.setMovies(data.rows)
            movies.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchMovies(movies.selectedCountrie.id, movies.selectedDirector.id, movies.selectedGenre.id, movies.selectedPeriod.id, movies.page, 20).then(data => {
            movies.setMovies(data.rows)
            movies.setTotalCount(data.count)
        })
    }, [movies.page, movies.selectedCountrie, movies.selectedDirector, movies.selectedGenre, movies.selectedPeriod])
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
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Recommendations;