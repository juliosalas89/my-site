'use client'

import { urbanist600, urbanist100 } from "@/utils/fonts"
import { useState } from "react"
import ExperienceCard from "./ExperienceCard"
import AnimatedAppearance from "../general/AnimatedAppearance"
import exp from '../../appData/experience.json'

const Experience = () => {
    const [experiences] = useState(exp.list)
    return (
        <main className="experience-main">
            <AnimatedAppearance children={
                <div className="title-main-container">
                    <div className={`title-right ${urbanist600.className}`}>
                        <p className="title-mid"><span className="green-text">Exp</span>erience</p>
                    </div>
                    <div className={`subtitle-div title-right ${urbanist100.className}`}>
                        <p>My experience as Software Developer and as a Mechanical Engineer</p>
                    </div>
                </div>
            }/>
            <div className="experience-cards-container">
                {experiences.map((experience, index) => <ExperienceCard key={index} index={index} experience={experience}/>)}    
            </div>
        </main>
    )
}

export default Experience