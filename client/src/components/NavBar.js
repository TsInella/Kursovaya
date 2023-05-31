import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FAVOURITES_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, RECOMMENDATIONS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const history = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="success" variant="dark">
            <Container>
            <NavLink style = {{fontSize: 30, color:'white'}} className="fw-bold" to = {RECOMMENDATIONS_ROUTE}>Гавно</NavLink>
            {user.isAuth ?
                <Nav className="ms-auto" style = {{color:'white'}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => history(ADMIN_ROUTE)}
                    >
                        Я админ
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => history(FAVOURITES_ROUTE)}
                        className="ms-2"
                    >
                        Любимое
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className="ms-2"
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ms-auto" style = {{color:'white'}}>
                    <Button variant={"outline-light"} onClick={()=>history(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
            </Container>
        </Navbar>

    );
});

export default NavBar;