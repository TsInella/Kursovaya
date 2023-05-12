import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, NavLink} from "react-bootstrap";
import {RECOMMENDATIONS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style = {{color:'whitesmoke'}} to  = {RECOMMENDATIONS_ROUTE}>Гавно</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style = {{color:'green'}}>
                    <Button variant={"outline-success"}>Я админ</Button>
                    <Button variant={"outline-success"} className="ms-2">Вход</Button>
                </Nav>
                :
                <Nav className="ms-auto" style = {{color:'green'}}>
                    <Button variant={"outline-success"} onClick={()=>user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
            </Container>
        </Navbar>

    );
});

export default NavBar;