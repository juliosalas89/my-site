'use client'
import { urbanist600, urbanist100 } from '@/utils/fonts'
import TechInfoBanner from "./TechInfoBanner"
import TechCard from "./TechCard"
import TechIcon from "./TechIcon"
import { useEffect, useRef, useState } from "react"
import tech from '../../appData/technologies.json'
import techIcons from '../../appData/techIcons.json'
import AnimatedAppearance from '../general/AnimatedAppearance'
import { useInView } from 'framer-motion'

const Technologies = () => {
    const [iconsBoxWidth, setIconsBoxWidth] = useState(null)
    const [selectedTechIndex, setSelectedTechIndex] = useState(null)
    const [icons] = useState(techIcons.list)
    const [technologies] = useState(tech.list)
    const iconsBox = useRef(null)
    const boxInView = useInView(iconsBox)
    
    useEffect(()=> {
        const dimensions = document.getElementById('icons-container').getBoundingClientRect()
        if(dimensions) setIconsBoxWidth(dimensions.width)
    })

    const findAndSelectTech = (iconIndex)=> {
        if(iconIndex === null) setSelectedTechIndex(null)
        const techToSelect = technologies.find(tech => tech.iconsIndexes.includes(iconIndex))
        techToSelect && setSelectedTechIndex(technologies.indexOf(techToSelect))
    }
    
    return (
        <main>
            <AnimatedAppearance children={
                <>
                    <div className={urbanist600.className}>
                        <p className="title-mid">Languages</p>
                        <p className="title-mid"><span className="green-text">and</span> tools</p>
                    </div>
                    <div className={`subtitle-div ${urbanist100.className}`}>
                        <p>Theese are the technologies that I know and I worked with so far</p>
                        <p>I'm continuously learning though, so they will be more in the future</p>
                    </div>
                </>
            }/>
            <div className="technologies-container">
                <div className="cards-container-div">
                    <div className="cards-flex-box">
                        {technologies.map((technology, index) => (
                            <TechCard 
                                techIndex={index}
                                technology={technology} 
                                selectedTechIndex={selectedTechIndex}
                                setSelectedTechIndex={techIndex => setSelectedTechIndex(techIndex)} 
                                key={index}
                            />
                        ))}
                    </div>
                </div>
                <div id="icons-container" className="icons-box-div" ref={iconsBox}>
                    { selectedTechIndex === null ? null : (
                        <TechInfoBanner 
                            iconsBoxWidth={iconsBoxWidth} 
                            unselectTech={() => setSelectedTechIndex(null)}
                            selectedTech={technologies[selectedTechIndex] || null}
                        />
                    )}
                    {!iconsBoxWidth ? null : icons.map((icon, index) => (
                        <TechIcon 
                            boxInView={boxInView}
                            findAndSelectTech={iconIndex => findAndSelectTech(iconIndex)}
                            selectedTech={technologies[selectedTechIndex] || null}
                            iconsBoxWidth={iconsBoxWidth} 
                            icon={icon} 
                            iconIndex={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Technologies