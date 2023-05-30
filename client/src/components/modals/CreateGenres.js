import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {createGenres} from "../../http/moviesAPI";

const CreateGenres = ({show, onHide}) => {
    const [value, setValue] = useState( '')
    const addGenres = () => {
        createGenres( {name: value}).then(data => {
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
                    Добавить жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder={"Введите жанр"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addGenres}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateGenres;