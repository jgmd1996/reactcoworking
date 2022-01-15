import React from "react";

export default function Cars({modelo, ano, placa}) {


    return (
        <div className="contach-card">
            <h3>{modelo}</h3>
            <div className="info-group">
                <p>{ano}</p>
            </div>
            <div className="info-group">
                <p>{placa}</p>
            </div>

        </div>
    )
}