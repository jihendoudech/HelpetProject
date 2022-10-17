import React from "react"
import pets from "../images/Pets.png"

export default function Hero() {
    return (
        <section className="hero">
            <img 
                className="hero--photo"
                src={pets}
                alt=""
            />
            <h1 className="hero--header ">Adopt pets</h1>
            <p className="hero--text">This adorable pets needs a home.</p>
        </section>
    )
}
