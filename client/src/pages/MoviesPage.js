import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const MoviesPage = () => {
    const movies = {id:1, name:"Убить Билла", description:"Убили Билла", img:'https://i.pinimg.com/originals/14/72/25/1472254e5c903212fef3c89e4c9b8a6d.jpg', year: "2002", link:'https://d.ixfilm.org/4460-ubit-billa-2003.html'}
    const description = [


    ]
        return (
        <div className = "bg-dark" style={{height: 1900}}>
            <Container className ="bg-light" style={{height: 1900, width: 1700}}>
                <Row>
                    <Col md={1}>
                    </Col>
                    <Col md={3} className={"my-5 align-items-right"}>
                        <Image width={390} height = {250} src={movies.img}/>
                        <h2 className={"my-4 text-success"} style={{width: 400, fontSize: 18 }}>{movies.link}</h2>
                        <h2 style={{fontSize: 15}}>{movies.description}</h2>
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