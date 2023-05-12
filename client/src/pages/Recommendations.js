import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenresBar from "../components/GenresBar";

const Recommendations = () => {
    return (
        <Container>
            <Form className = "mt-2">
                <Col md={3}>
                    <GenresBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Form>
        </Container>
    );
};

export default Recommendations;