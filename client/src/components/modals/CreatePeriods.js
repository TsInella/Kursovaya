import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {createPeriods} from "../../http/moviesAPI";

const CreatePeriods = ({show, onHide}) => {
    const [value, setValue] = useState( '')
    const addPeriods = () => {
        createPeriods( {name: value}).then(data => {
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
                    Добавить временной промежуток
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange = {e => setValue(e.target.value)}
                        placeholder={"Введите год выпуска фильма"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPeriods}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreatePeriods;