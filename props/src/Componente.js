import React from "react";

export default function Componente(props) {


    return (
        <div className="contach-card">
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>

        </div>
    )
}