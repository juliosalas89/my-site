'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Decimal from "decimal.js";

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
        const card = document.getElementById(`offset-catch-div-${name}`)
        const cardValues = card.getBoundingClientRect()
        const root = document.documentElement;
        card.addEventListener('mousemove', event => {
            root.style.setProperty('--cursor-x', new Decimal(event.offsetX).div(cardValues.width));
            root.style.setProperty('--cursor-y', new Decimal(event.offsetY).div(cardValues.height));
        });
    }

    return (
        // <motion.div 
        //     className="education-card-main"
        //     transition={{ duration: 0.5 }}   
        // animate={{ y: index * 200 }}
        // >
        <main className={`education-card-main-${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="education-card-div">
                <div className="education-card-header">
                    <Image src="/educationIcons/unt.png" alt={`-icon`} width="150" height="40" />
                    <p className="education-card-header-details">holi que onda</p>
                </div>
                <div className="education-card-body">
                    <p>this is what i leaned in this place</p>
                </div>
                <div className="offset-catch-div" id={`offset-catch-div-${name}`}/>
            </div>
        </main>        
    )
}

export default EducationCard