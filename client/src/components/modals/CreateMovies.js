import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const CreateMovies = ({show, onHide}) => {
    const {movies} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () =>{
        setInfo([...info,{title:'', description:'', number: Date.now()}])
    }

    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !==number))
    }

    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить фильм
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown  className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите жанр </Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.genres.map(genre =>
                                <Dropdown.Item key = {genre.id}>{genre.name}</Dropdown.Item> //где выпадающее меню блин, оно как бы есть, но пустое
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите страну </Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.countries.map(countrie =>
                                <Dropdown.Item key = {countrie.id}>{countrie.name}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите режиссера </Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.directors.map(director =>
                                <Dropdown.Item key = {director.id}>{director.name}</Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown  className="mt-2 mb-2" >
                        <Dropdown.Toggle>Выберите год выпуска </Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.periods.map(period =>
                                <Dropdown.Item key = {period.id}>{period.name}</Dropdown.Item>
                            )}
                        </DropdownMenu>

                    </Dropdown>
                    <FormControl
                        className="mt-3"
                        placeholder="Введите название фильма"
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите название фильма"
                        type = "file"
                    />
                    <hr/>
                    <Button
                        variant="outline-success"
                        onClick={addInfo}
                    >
                        Добавить описание
                    </Button>
                    {info.map(i =>
                            <Row className="mt-4" key = {i.number}> //???


                                <Col md={4}>
                                    <FormControl
                                        placeholder="Введите описание"
                                    />
                                </Col>
                                <Col md ={4}>
                                    <Button
                                        onClick={() => removeInfo((i.number))}
                                        variant={"outline-danger"}
                                    >
                                        Удалить описание
                                    </Button>
                                </Col>
                            </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateMovies;