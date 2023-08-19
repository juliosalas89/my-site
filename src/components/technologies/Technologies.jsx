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

const Technologies = forwardRef(function Technologies (_, ref) {
    const iconsBoxDimensions = useRef(null)
    const [selectedTechIndex, setSelectedTechIndex] = useState(null)
    const icons = useRef(techIcons.list)
    const technologies = useRef(tech.list)
    const iconsBox = useRef(null)
    const boxInView = useInView(iconsBox)
    
    useEffect(()=> {
        const dimensions = document.getElementById('icons-container').getBoundingClientRect()
        dimensions && (iconsBoxDimensions.current = dimensions)
    })

    const findAndSelectTech = (iconIndex)=> {
        if(iconIndex === null) setSelectedTechIndex(null)
        const techToSelect = technologies.current.find(tech => tech.iconsIndexes.includes(iconIndex))
        techToSelect && setSelectedTechIndex(technologies.current.indexOf(techToSelect))
    }
    
    return (
        <main ref={ref}>
            <div className='technologies-padding-div'>
                <AnimatedAppearance>
                    <div className='title-main-container'>
                        <div className={urbanist600.className}>
                            <p className="title-mid">Technologies</p>
                            <p className="title-mid"><span className="gradient-text">and</span> languages</p>
                        </div>
                        <div className={`subtitle-div ${urbanist100.className}`}>
                            <p>These are the technologies I know and I work with so far.</p>
                            <p>I&#039;m continuously learning though, so I hope there will be more in the future</p>
                        </div>
                    </div>
                </AnimatedAppearance>
                <div className="technologies-container">
                    <div className="cards-container-div">
                        <div className="cards-flex-box">
                            {technologies.current.map((technology, index) => (
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
                                iconsBoxDimensions={iconsBoxDimensions.current} 
                                unselectTech={() => setSelectedTechIndex(null)}
                                selectedTech={technologies.current[selectedTechIndex] || null}
                            />
                        )}
                        {!iconsBoxDimensions.current ? null : icons.current.map((icon, index) => (
                            <TechIcon 
                                boxInView={boxInView}
                                findAndSelectTech={iconIndex => findAndSelectTech(iconIndex)}
                                selectedTech={technologies.current[selectedTechIndex] || null}
                                iconsBoxDimensions={iconsBoxDimensions.current} 
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