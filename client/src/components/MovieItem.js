import React from 'react';
import Image from "react-bootstrap/Image"
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {MOVIES_ROUTE} from "../utils/consts";

const MovieItem = ({movies}) => {
    const history = useNavigate()
    return (
        <Col md={3} onClick={() => history(MOVIES_ROUTE + "/" + movies.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border = {'light'}>
                <Image width={150} height = {150} src={movies.img}/>
                <div className={"text-black-50 mt-1 d-flex justify-content-between align-items-center"}>
                    <div>aaaaaaa</div>
                </div>
                <div>
                    {movies.name}
                </div>
            </Card>

        </Col>
    );
};

export default MovieItem;