'use client'
import { urbanist600, urbanist100 } from "@/utils/fonts"
import { forwardRef, useState } from "react"
import EducationCard from "./EducationCard"
import AnimatedAppearance from "../general/AnimatedAppearance"

const Education = forwardRef(function Education (_,ref) {
    const [educationCards] = useState(['tonio', 'pepo'])
    return (
        <main ref={ref} className="education-main">
            <AnimatedAppearance>
                <div className="title-main-container">
                    <div className={`title-right ${urbanist600.className}`}>
                        <p className="title-mid">Education</p>
                        <p className="title-mid"><span className="gradient-text">and</span> degrees</p>
                    </div>
                    <div className={`subtitle-div title-right ${urbanist100.className}`}>
                        <p>I know reading a lot of cards just to know how much i know is annoying, so to be short:</p>
                        <p>I'm have a degree in Mechanical Engineering and I know some JavaScript Stacks.</p>
                    </div>
                </div>
            </AnimatedAppearance>
            <div className="education-cards-container">
            </div>
        </main>
    )
})

export default Education