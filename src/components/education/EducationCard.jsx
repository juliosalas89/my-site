'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const EducationCard = ({name, index}) => {
    // const [xOffset, setXOffset] = useState(0.01)
    const cardRef = useRef(null)

    
    // useEffect(() => {
    //     const observer = new IntersectionObserver(onScroll);
    //     observer.observe(cardRef.current);
    // }, [cardRef]);
    
    // const onScroll = entries => {
    //     setXOffset(entries[0].isIntersecting ? 1 : 0.01)
    // }
    
    useEffect(()=> {
        handleCursorMove()
    })
    
    const handleCursorMove = () => {
        const card = document.getElementById(`edcucation-card-div-${name}`)
        const cardValues = card.getBoundingClientRect()
        const root = document.documentElement;
        card.addEventListener('mousemove', event => {
            root.style.setProperty('--cursor-x', (event.clientX-cardValues.left)/cardValues.width);
            root.style.setProperty('--cursor-y', (event.clientY-cardValues.top)/cardValues.height);
        });
    }

    return (
        // <motion.div 
        //     className="education-card-main"
        //     transition={{ duration: 0.5 }}   
        // animate={{ y: index * 200 }}
        // >
        <motion.div 
            className={`education-card-main-${index % 2 === 0 ? 'left' : 'right'}`}   
        >
            <motion.div
                transition={{ duration: 0.3 }}
                id={`edcucation-card-div-${name}`} 
                ref={cardRef}
                className="education-card-div"
            >
                <div className="education-card-header">
                    <Image src="/techIcons/next.png" alt={`-icon`} width="40" height="40" />
                    <p className="education-card-header-details">holi que onda</p>
                </div>
                <div className="education-card-body">
                    <p>this is what i leaned in this place</p>
                </div>
            </motion.div>
        </motion.div>        
    )
}

export default EducationCard