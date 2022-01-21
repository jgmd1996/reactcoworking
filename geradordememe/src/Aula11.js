import React from "react";

export default function Aula11() {
    const result = React.useState("yes")
    console.log(result)

    return (
        <div className="state">
            <h1 className="state--title">is state important to know</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
