import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import "../Card.css"

export default function Card() {
    return (
            <div className="card--container">
                <Navbar />
                <Main />
            </div>
    )
}