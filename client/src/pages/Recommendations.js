import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenresBar from "../components/GenresBar";
import DirectorsBar from "../components/DirectorsBar";

const Recommendations = () => {
    return (
        <Container>
            <Row className = "mt-2">
                <Col md={3}>
                    <GenresBar/>
                </Col>
                <Col md={9}>
                    <DirectorsBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default Recommendations;