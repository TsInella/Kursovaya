import React, {useState} from 'react';
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(email, password);
            console.log(response)
        }
    }
    return (
        <Container
            className= "d-flex justify-content-center align-items-center"
            style = {{height:window.innerHeight - 54}}
        >
            <Card style = {{width:400, height:450}} className="p-5">
                <h2 className="m-auto, align-baseline, text-center">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-5"
                        placeholder="Введи логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-5"
                        placeholder="Введи пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-1 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to = {REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to = {LOGIN_ROUTE}>Войди!</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-4"
                            style={{width:100}} //вернемся!
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти!' : 'Регистрация'}
                        </Button>
                    </Row>
                </Form>

            </Card>
        </Container>
    );
};

export default Auth;