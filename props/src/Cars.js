import React from "react";

export default function Cars(props) {

console.log(props.comments)
    return (
        <div className="contach-card">
            <h3>{props.modelo}</h3>
            <div className="info-group">
                <p>{props.ano}</p>
            </div>
            <div className="info-group">
                <p>{props.placa}</p>
            </div>

        </div>
    )
}