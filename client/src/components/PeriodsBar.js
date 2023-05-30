import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const PeriodsBar = observer(() => {
    const {movies} = useContext(Context)
    return (
        <ListGroup>
            {movies.periods.map(periods =>
                <ListGroup.Item
                    style = {{cursor:'pointer'}}
                    active={periods.id === movies.selectedPeriod.id}
                    onClick={() => movies.setSelectedPeriod(periods)}
                    key = {periods.id}
                >
                    {periods.dates}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default PeriodsBar;