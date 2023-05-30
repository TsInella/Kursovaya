import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {createDirectors} from "../../http/moviesAPI";

const CreateDirectors = ({show, onHide}) => {
    const [value, setValue] = useState( '')
    const addDirectors = () => {
        createDirectors( {name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавить режиссера
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder={"Введите имя режиссера"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDirectors}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateDirectors;