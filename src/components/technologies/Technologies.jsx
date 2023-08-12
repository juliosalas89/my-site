'use client'
import { urbanist600, urbanist100 } from '@/utils/fonts'
import TechInfoBanner from "./TechInfoBanner"
import TechCard from "./TechCard"
import TechIcon from "./TechIcon"
import { forwardRef, useEffect, useRef, useState } from "react"
import tech from '../../appData/technologies.json'
import techIcons from '../../appData/techIcons.json'
import AnimatedAppearance from '../general/AnimatedAppearance'
import { useInView } from 'framer-motion'

const Technologies = forwardRef((_, ref) => {
    const [iconsBoxDimensions, setIconsBoxDimensions] = useState(null)
    const [selectedTechIndex, setSelectedTechIndex] = useState(null)
    const [icons] = useState(techIcons.list)
    const [technologies] = useState(tech.list)
    const iconsBox = useRef(null)
    const boxInView = useInView(iconsBox)
    
    useEffect(()=> {
        if(iconsBoxDimensions) return
        const dimensions = document.getElementById('icons-container').getBoundingClientRect()
        dimensions && setIconsBoxDimensions(dimensions)
    })

    const findAndSelectTech = (iconIndex)=> {
        if(iconIndex === null) setSelectedTechIndex(null)
        const techToSelect = technologies.find(tech => tech.iconsIndexes.includes(iconIndex))
        techToSelect && setSelectedTechIndex(technologies.indexOf(techToSelect))
    }
    
    return (
        <main ref={ref}>
            <div className='technologies-padding-div'>
                <AnimatedAppearance children={
                    <div className='title-main-container'>
                        <div className={urbanist600.className}>
                            <p className="title-mid">Technologies</p>
                            <p className="title-mid"><span className="gradient-text">and</span> languages</p>
                        </div>
                        <div className={`subtitle-div ${urbanist100.className}`}>
                            <p>Theese are the technologies I know and I work with so far.</p>
                            <p>I'm continuously learning though, so I hope there will be more in the future</p>
                        </div>
                    </div>
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
                                iconsBoxDimensions={iconsBoxDimensions} 
                                unselectTech={() => setSelectedTechIndex(null)}
                                selectedTech={technologies[selectedTechIndex] || null}
                            />
                        )}
                        {!iconsBoxDimensions ? null : icons.map((icon, index) => (
                            <TechIcon 
                                boxInView={boxInView}
                                findAndSelectTech={iconIndex => findAndSelectTech(iconIndex)}
                                selectedTech={technologies[selectedTechIndex] || null}
                                iconsBoxDimensions={iconsBoxDimensions} 
                                icon={icon} 
                                iconIndex={index}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Technologies