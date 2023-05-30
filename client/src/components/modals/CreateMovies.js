import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {
    createMovies,
    fetchCountries,
    fetchDirectors,
    fetchGenres,
    fetchMovies,
    fetchPeriods
} from "../../http/moviesAPI"
import {observer} from "mobx-react-lite";

const CreateMovies = observer( ({show, onHide}) => {
    const {movies} = useContext(Context)
    const [name, setName] = useState('')
    const [genre, setGenre] = useState(null)
    const [director, setDirector] = useState(null)
    const [period, setPeriod] = useState(null)
    const [file, setFile] = useState(null)
    const [year, setYear] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')

    useEffect(()=>{
        fetchCountries().then(data => movies.setCountries(data))
        fetchDirectors().then(data => movies.setDirectors(data))
        fetchGenres().then(data => movies.setGenres(data))
        fetchPeriods().then(data => movies.setPeriods(data))
        fetchMovies().then((data => movies.setMovies(data.rows)))
    }, [])


    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addMovie = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('genreid', movies.selectedGenre.id)
        formData.append('countrieid', movies.selectedCountrie.id)
        formData.append('directorid', movies.selectedDirector.id)
        formData.append('periodid', movies.selectedPeriod.id)
        formData.append('year', year)
        formData.append('somelink', link)
        formData.append('img', file)
        formData.append('description', description)
        createMovies(formData).then(data => onHide())
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


                        <Dropdown.Toggle>{movies.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.genres.map(genre =>
                                <Dropdown.Item
                                    onClick={() => movies.setSelectedGenre(genre)}
                                    key = {genre.id}>
                                    {genre.name}
                                </Dropdown.Item> //где выпадающее меню блин, оно как бы есть, но пустое
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{movies.selectedCountrie.name || "Выберите страну"}</Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.countries.map(countrie =>
                                <Dropdown.Item
                                    onClick={() => movies.setSelectedCountrie(countrie)}
                                    key = {countrie.id}>
                                    {countrie.name}
                                </Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{movies.selectedDirector.name || "Выберите режиссера"}</Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.directors.map(director =>
                                <Dropdown.Item
                                    onClick={() => movies.setSelectedDirector(director)}
                                    key = {director.id}>
                                    {director.name}
                                </Dropdown.Item>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown  className="mt-2 mb-2" >
                        <Dropdown.Toggle>{movies.selectedPeriod.dates || "Выберите период"}</Dropdown.Toggle>
                        <DropdownMenu>
                            {movies.periods.map(period =>
                                <Dropdown.Item
                                    onClick={() => movies.setSelectedPeriod(period)}
                                    key = {period.id}>
                                    {period.dates}
                                </Dropdown.Item>
                            )}
                        </DropdownMenu>



                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название фильма"
                    />
                    <Form.Control
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ссылку"
                    />
                    <Form.Control
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        className="mt-3"
                        placeholder="Введите год"
                    />


                    <FormControl
                        className="mt-3"
                        type = "file"
                        onChange={selectFile}
                    />

                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание"
                    />


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMovie}>Добавить</Button>

            </Modal.Footer>
        </Modal>
    );
});

export default CreateMovies;