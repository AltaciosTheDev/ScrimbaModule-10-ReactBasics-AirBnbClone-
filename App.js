import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App(){
    const cards = data.map(card =>{
        return(
            <Card 
                key={card.id}
                {...card}
            />
        )
    })
    
    return(
        <>
            <Navbar />  
            <Hero/> 
            <section className="card-section">
                {cards}
            </section>
        </>
        
    )
}


