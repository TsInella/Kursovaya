import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-success"} className="mt-2">Добавить страну</Button>
            <Button variant={"outline-success"} className="mt-2">Добавить режиссера</Button>
            <Button variant={"outline-success"} className="mt-2">Добавить жанр</Button>
            <Button variant={"outline-success"} className="mt-2">Добавить длительность фильма</Button>

        </Container>
    );
};

export default Admin;