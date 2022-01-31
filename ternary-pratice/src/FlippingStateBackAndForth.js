import React from "react"

export default function FlippingStateBackAndForth() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }


    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "yes"  : "no"}</h1>
            </div>
        </div>
    )
}
