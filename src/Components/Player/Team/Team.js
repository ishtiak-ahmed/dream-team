import React from 'react';
import "./Team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const player = props.player;
    return (
        <div>
            <li>{player.name} {player.salary} <FontAwesomeIcon onClick={() => props.event(player)} icon={faTimesCircle} /></li>
        </div>
    );
};

export default Team;