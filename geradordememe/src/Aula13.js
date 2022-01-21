import React from "react";

export default function Aula11() {
    const [isImportant, setIsImportant] = React.useState("yes")

    function hanleClick(){
        setIsImportant("No")
    }
    return (
        <div className="state">
            <h1 className="state--title">is state important to know</h1>
            <div className="state--value" onClick={hanleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
