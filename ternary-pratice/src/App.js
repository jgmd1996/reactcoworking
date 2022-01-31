import React from "react"

export default function App() {
    const isGoingOut = false
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "yes"  : "no"}</h1>
            </div>
        </div>
    )
}
