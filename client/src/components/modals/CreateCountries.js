import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {createCountries} from "../../http/moviesAPI";

const CreateCountries = ({show, onHide}) => {
    const [value, setValue] = useState( '')
    const addCountries = () => {
        createCountries( {name: value}).then(data => {
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
                    Добавить страну
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder={"Введите название страны"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCountries}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateCountries;