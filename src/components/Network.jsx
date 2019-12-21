import React from "react";
import { Link } from 'react-router-dom';

const Network = ({ data }) => {
    let render;

    if (data.length) {
        render = data.map(el => {
            return (
                <Link to={"/users/" + el.id} key={el.id}>
                    <span className="person">{el.name}</span>
                </Link>
            )
        })
    } else {
        render = <span className="person" style={{ margin: "1rem" }}>none</span>;
    }
    return (
        <div>
            {
                render
            }
        </div>
    );
}

export default Network;