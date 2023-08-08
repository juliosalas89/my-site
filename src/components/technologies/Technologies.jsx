'use client'
import TechInfoBanner from "./TechInfoBanner"
import TechCard from "./TechCard"
import TechIcon from "./TechIcon"
import { useEffect, useState } from "react"

const Technologies = () => {
    const [iconsBoxWidth, setIconsBoxWidth] = useState(null)
    const [selectedTechIndex, setSelectedTechIndex] = useState(null)
    const [icons] = useState(['CSS3', 'express', 'git', 'html5', 'js', 'mySQL', 'next', 'node', 'react', 'sql', 'vue'])
    const [technologies] = useState([
        {
            label: 'React.js',
            iconsIndexes: [8, 6]
        },
        {
            label: 'Vue.js',
            iconsIndexes: [10]
        },
        {
            label: 'JavaScript',
            iconsIndexes: [4, 3, 0]
        },
        {
            label: 'MySQL - SQLanguage',
            iconsIndexes: [5, 9]
        },
        {
            label: 'Node.js - Express',
            iconsIndexes: [7, 1]
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
        <main>
            <p className="title-mid"><span className="blue-span">languages</span> and</p>
            <p className="title-mid tech-title"><span className="green-span">tools</span> I'm used to</p>
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
                <div id="icons-container" className="icons-box-div">
                    { selectedTechIndex !== null ? <TechInfoBanner iconsBoxWidth={iconsBoxWidth} unselectTech={() => setSelectedTechIndex(null)}/> : null}
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
        </main>
    )
}

export default Technologies