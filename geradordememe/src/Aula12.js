import React from "react";

export default function Aula11() {
    const [isImportant, func] = React.useState("yes")
    console.log(isImportant)

    return (
        <div className="state">
            <h1 className="state--title">is state important to know</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
