'use client'

import { useState } from "react"
import EducationCard from "./EducationCard"

const Education = () => {
    const [educationCards] = useState(['tonio', 'pepo'])
    return (
        <main className="education-main">
            <p className="title-mid">education and</p>
            <p className="title-mid indent">adquired <span className="green-span">knowledge</span></p>
            <div className="education-cards-container">
                {educationCards.map((card, index) => <EducationCard key={index} index={index} name={card}/>)}    
            </div>
        </main>
    )
}

export default Education