'use client'
import { urbanist600, urbanist100 } from "@/utils/fonts"
import { forwardRef, useRef } from "react"
import EducationCard from "./EducationCard"
import AnimatedAppearance from "../general/AnimatedAppearance"
import educ from '../../appData/education.json'

const Education = forwardRef(function Education (_,ref) {
    const educationCards = useRef(educ.list)
    return (
        <main ref={ref} className="education-main">
            <div className="education-padding-div">
                <AnimatedAppearance>
                    <div className="title-main-container">
                        <div className={`title-right ${urbanist600.className}`}>
                            <p className="title-mid">Education</p>
                            <p className="title-mid"><span className="gradient-text">and</span> degrees</p>
                        </div>
                        <div className={`subtitle-div title-right ${urbanist100.className}`}>
                            <p>I know reading a lot of cards just to know how much i know is annoying, so to be short:</p>
                            <p>I&#039;m have a degree in Mechanical Engineering and I know some JavaScript Stacks.</p>
                        </div>
                    </div>
                </AnimatedAppearance>
                <div className="education-cards-container">
                    {educationCards.current.map((education, index) => <EducationCard key={index} index={index} education={education}/>)}
                </div>
            </div>
        </main>
    )
})

export default Education