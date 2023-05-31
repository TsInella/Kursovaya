import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneMovie} from "../http/moviesAPI";
import {LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
const MoviesPage = () => {
    const [movies, setMovies] = useState({info: []})
    const [genres, setGenres] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneMovie(id).then(data => setMovies(data))
    }, [])

    return (

        <div className = "bg-dark" style={{height: 1900}}>
            <Container className ="bg-light" style={{height: 1900, width: 1700}}>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={3} className={"my-5 align-items-right"}>
                        <Image width={390} height = {560} src={process.env.REACT_APP_API_URL + movies.img}/>
                        <h2 className={"pt-3"} style={{fontSize: 15}}>{movies.description}</h2>
                        <h2 style={{fontSize: 15}}>{movies.somelink}</h2>
                    </Col >
                    <Col md={1}>
                    </Col>
                    <Col md={4} className={"my-5"}>
                        <Row className={"d-flex flex-column align-items-center"}>
                            <h2 className={"text-black"}>{movies.name}</h2>
                            <h4 className={"text-black-50"}>{movies.year}</h4>
                        </Row>
                    </Col>
                    <Col md={3} className={"my-5"}>
                        <Card style={{width: 200}} className={"d-flex flex-column align-items-right justify-content-around"}
                        >
                            <Button variant={"outline-dark"}>Добавить в избранное</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoviesPage;