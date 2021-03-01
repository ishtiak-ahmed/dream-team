import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const player = props.player;
    return (
        <div className="team-player">
            <div>
                <p>{player.name} - <small>${player.salary}</small></p>
            </div>
            <div>
                <FontAwesomeIcon onClick={() => props.event(player)} icon={faTimesCircle} />
            </div>
        </div>)
};

export default Team;