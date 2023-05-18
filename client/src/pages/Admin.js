import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCountries from "../components/modals/CreateCountries";
import CreateDirectors from "../components/modals/CreateDirectors";
import CreateGenres from "../components/modals/CreateGenres";
import CreatePeriods from "../components/modals/CreatePeriods";
import CreateMovies from "../components/modals/CreateMovies";

const Admin = () => {
    const [countriesVisible, setCountriesVisible] = useState(false)
    const [directorsVisible, setDirectorsVisible] = useState(false)
    const [genresVisible, setGenresVisible] = useState(false)
    const [periodsVisible, setPeriodsVisible] = useState(false)
    const [moviesVisible, setMoviesVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={()=>setCountriesVisible(true)}
            >
                Добавить страну
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={()=>setDirectorsVisible(true)}
            >
                Добавить режиссера
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={()=>setGenresVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant={"outline-success"}
                className="mt-4 p-2"
                onClick={()=>setPeriodsVisible(true)}
            >
                Добавить длительность фильма
            </Button>

            <CreateMovies show ={moviesVisible} onHide = {() => setMoviesVisible(false)}/>
            <CreateCountries show ={countriesVisible} onHide = {() => setCountriesVisible(false)}/>
            <CreateDirectors show ={directorsVisible} onHide = {() => setDirectorsVisible(false)}/>
            <CreateGenres show ={genresVisible} onHide = {() => setGenresVisible(false)}/>
            <CreatePeriods show ={periodsVisible} onHide = {() => setPeriodsVisible(false)}/>
        </Container>
    );
};

export default Admin;