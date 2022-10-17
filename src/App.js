import React from "react"
import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import Card from "./Components/Card.js"
import data from "./data.js"
import {Router, Routes, Route, useNavigate} from 'react-router-dom';
import CreatePet from "./createPet";

export default function App() {
    const cardElements = data.map(item =>
        <Card  
            key={item.id}
            {...item}
        />
    );
    console.log(cardElements);
    //const navigate= useNavigate();
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
            {/*<Router>
				<Routes>
				<Route path='/createPet' element={<CreatePet />} />
				</Routes>
    </Router>*/}
        </div>
    )
}

