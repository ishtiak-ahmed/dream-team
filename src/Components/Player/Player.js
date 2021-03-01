import React from 'react';
import './Player.css'

const Player = (props) => {
    const { name, role, salary, img } = props.player;
    const handleAddPlayer = player => {
        props.event(player)
    }
    return (
        <div className="player">
            <div className="avatar">
                <img src={img} className="rounded-circle" alt="" />
            </div>
            <div className="info">
                <p className="fs-6"><strong>{name}</strong></p>
                <p><small>Role: {role}</small></p>
                <p><small>Salary: ${salary}</small></p>
                <button className="btn btn-warning btn-sm" onClick={() => handleAddPlayer(props.player)}>Add To Team</button>
            </div>
        </div >
    );
};

export default Player;