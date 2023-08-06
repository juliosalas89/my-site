'use client'

import TechCard from "./TechCard"
import TechIcon from "./TechIcon"
import { useEffect, useState } from "react"

const Technologies = () => {
    const [iconsBoxWidth, setIconsBoxWidth] = useState(null)
    const [selectedTechIndex, setSelectedTechIndex] = useState(null)
    const [icons] = useState(['CSS3', 'express', 'git', 'html5', 'js', 'mySQL', 'next', 'node', 'react', 'sql', 'vue'])
    const [technologies] = useState([
        {
            label: 'React.js - React Native - Next.js',
            iconsIndexes: [6, 8]
        },
        {
            label: 'JavaScript - CSS3 - HTML5',
            iconsIndexes: [0, 3, 4]
        },
        {
            label: 'Node.js - Express',
            iconsIndexes: [1, 7]
        },
        {
            label: 'Vue.js',
            iconsIndexes: [10]
        },
        {
            label: 'MySQL - SQLanguage',
            iconsIndexes: [5, 9]
        },
        {
            label: 'Git',
            iconsIndexes: [2]
        }
    ])
    
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
        <div className="technologies-container">
            <div className="cards-container-div">
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
            <div id="icons-container" className="icons-container-div">
                {!iconsBoxWidth ? null : icons.map((iconName, index) => (
                    <TechIcon 
                        findAndSelectTech={iconIndex => findAndSelectTech(iconIndex)}
                        selectedTech={technologies[selectedTechIndex] || null}
                        iconsBoxWidth={iconsBoxWidth} 
                        iconName={iconName} 
                        iconIndex={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Technologies