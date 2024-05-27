'use client'

import { urbanist600, urbanist100 } from "@/utils/fonts"
import { forwardRef, useState } from "react"
import ExperienceCard from "./ExperienceCard"
import AnimatedAppearance from "../general/AnimatedAppearance"
import exp from '../../appContent/experience.json'
import { calcElapsedTime } from "@/utils/timeUtils"

const Experience = forwardRef(function Experience (_,ref) {
    const [experiences] = useState(exp.list)
    return (
        <main ref={ref} className="experience-main">
            <div className="experience-padding-div">
                <AnimatedAppearance>
                    <div className="title-main-container">
                        <div className={`title-right ${urbanist600.className}`}>
                            <p className="title-mid"><span className="green-text">Exp</span>erience</p>
                        </div>
                        <div className={`subtitle-div title-right ${urbanist100.className}`}>
                            <p>{calcElapsedTime('"Apr 01, 2020"')} of experience as Software Engineer</p>
                        </div>
                    </div>
                </AnimatedAppearance>
                <div className="experience-cards-container">
                    {experiences.map((experience, index) => <ExperienceCard key={index} index={index} experience={experience}/>)}    
                </div>
            </div>
        </main>
    )
})

export default Experience