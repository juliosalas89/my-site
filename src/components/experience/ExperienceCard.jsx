'use client'

import Image from "next/image"
import { useEffect } from "react";
import Decimal from "decimal.js";
import { urbanist100, urbanist300 } from "@/utils/fonts";

const ExperienceCard = ({experience, index}) => {
    
    useEffect(()=> {
        handleCursorMove()
    })
    
    const handleCursorMove = () => {
        const card = document.getElementById(`offset-catch-div-${experience.icon.fileName}${index}`)
        const cardValues = card.getBoundingClientRect()
        const root = document.documentElement;
        card.addEventListener('mousemove', event => {
            root.style.setProperty('--cursor-x', new Decimal(event.offsetX).div(cardValues.width));
            root.style.setProperty('--cursor-y', new Decimal(event.offsetY).div(cardValues.height));
        });
    }

    const calculateTime = (dateFrom) => {
        const elapsedDays = (new Date() - new Date(dateFrom))/(1000 * 60 * 60 * 24)
        const elapsedYears = Math.floor(elapsedDays/365)
        const elapsedMonths = Math.floor(elapsedDays/30.4) - elapsedYears * 12
        const yearsString = !elapsedYears ? '' : elapsedYears === 1 ? elapsedYears + ' year' : elapsedYears + ' years'
        const monthsString = !elapsedMonths ? '' : elapsedMonths === 1 ? elapsedMonths + ' month' : elapsedMonths + ' months'
        return yearsString + monthsString
    }

    return (
        <main className={`experience-card-main-${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-card-div">
                <div className="experience-card-header">
                    <div className="experience-card-logo-div">
                        <Image src={`/experienceIcons/${experience.icon.fileName}`} alt={`icon-${experience.icon.fileName}`} width={experience.icon.width} height={experience.icon.height} />
                    </div>
                    <div className={`experience-card-header-details ${urbanist300.className}`}>
                        <p>{experience.title}</p>
                        <p>{`${experience.dates} (${experience._time.present ? calculateTime(experience._time.time) : experience._time.time})`}</p>
                    </div>
                </div>
                <div className="experience-card-body">
                    <p className={urbanist100.className}>{experience.description}</p>
                </div>
                <div className="offset-catch-div" id={`offset-catch-div-${experience.icon.fileName}${index}`}/>
            </div>
        </main>        
    )
}

export default ExperienceCard