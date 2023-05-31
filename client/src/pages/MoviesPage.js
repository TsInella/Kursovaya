import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate, useParams} from 'react-router-dom'
import {fetchOneMovie} from "../http/moviesAPI";
import {FAVOURITES_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
const MoviesPage = () => {
    const [movies, setMovies] = useState({info: []})
    const [genres, setGenres] = useState({info: []})
    const {id} = useParams()
    const history = useNavigate()
    useEffect(() => {
        fetchOneMovie(id).then(data => setMovies(data))
    }, [])

    return (

        <div className = "bg-dark" style={{height: 1900}}>
            <Container className ="bg-light" style={{height: 1900, width: 1700}}>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={5} className={"my-5 align-items-right"}>
                        <Image width={390} height = {560} src={process.env.REACT_APP_API_URL + movies.img}/>
                        <h2 className={"pt-5 width: 700"} style={{fontSize: 15}}>{movies.description}</h2>
                        <h2 style={{fontSize: 15}} className={"text-success"}>{movies.somelink}</h2>
                    </Col >

                    <Col md={3} className={"my-5"}>
                        <Row className={"d-flex flex-column align-items-center"}>
                            <h2 className={"text-black"}>{movies.name}</h2>
                            <h4 className={"text-black-50"}>{movies.year}</h4>
                        </Row>
                    </Col>
                    <Col md={3} className={"my-5"}>
                        <Card style={{width: 200}} className={"d-flex flex-column align-items-right justify-content-around"}
                        >
                            <Button variant={"outline-dark"} onClick={() => history(FAVOURITES_ROUTE)}>Добавить в избранное</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoviesPage;