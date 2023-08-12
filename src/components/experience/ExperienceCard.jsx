'use client'

import Image from "next/image"
import { useEffect } from "react";
import Decimal from "decimal.js";
import { urbanist100, urbanist300 } from "@/utils/fonts";

export default function ExperienceCard ({experience, index}) {
    
    useEffect(()=> {
        handleCursorMove()
    })
    
    const handleCursorMove = () => {
        const card = document.getElementById(`offset-catch-div-${experience.logo.fileName}${index}`)
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
                <section className="experience-card-header">
                    <div className="experience-card-logo-div">
                        <Image src={`/experienceLogos/${experience.logo.fileName}`} alt={`logo-${experience.logo.fileName}`} width={experience.logo.width} height={experience.logo.height} />
                    </div>
                    <div className={`experience-card-header-details ${urbanist300.className}`}>
                        <p>{experience.title}</p>
                        <p>{`${experience.dates} (${experience._time.present ? calculateTime(experience._time.time) : experience._time.time})`}</p>
                    </div>
                </section>
                <section className="experience-card-icons">
                    {experience.techIcons && experience.techIcons.map((icon, index) => (
                        <div key={index} className="experience-card-icon-div">
                            <Image src={`/techIcons/${icon.fileName}`} alt={icon.fileName} height={icon.height} width={icon.width} />
                        </div>
                    ))}
                </section>
                <section className="experience-card-body">
                    <p className={urbanist100.className}>{experience.description}</p>
                </section>
                <div className="offset-catch-div" id={`offset-catch-div-${experience.logo.fileName}${index}`}/>
            </div>
        </main>        
    )
}
