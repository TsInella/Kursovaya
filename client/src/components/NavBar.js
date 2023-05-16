import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {RECOMMENDATIONS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="success" variant="dark">
            <Container>
            <NavLink style = {{fontSize: 30, color:'white'}} className="fw-bold" to  = {RECOMMENDATIONS_ROUTE}>Гавно</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style = {{color:'white'}}>
                    <Button variant={"outline-light"}>Я админ</Button>
                    <Button variant={"outline-light"} className="ms-2">Вход</Button>
                </Nav>
                :
                <Nav className="ms-auto" style = {{color:'white'}}>
                    <Button variant={"outline-light"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
            </Container>
        </Navbar>

    );
});

export default NavBar;