'use client'

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { urbanist100, urbanist300 } from "@/utils/fonts"

export default function EducationCard ({education, index}) {
    const [xOfseft, setXOfseft] = useState(index % 2 === 0 ? '-50%' : '50%')
    const element = useRef(null)
    const inView = useInView(element)

    
    useEffect(()=> {    
        setXOfseft(inView ? 0 : index % 2 === 0 ? '-50%' : '50%')
    }, [inView])

    return (
        <motion.div
            ref={element}
            animate={{ x: xOfseft }}
            transition={{duration: 0.3}}
            className={`education-card-main-${index % 2 === 0 ? 'left' : 'right'}`}
        >
            <div className="education-card-div">
                <div className="education-card-header">
                    <div className="education-card-logo-div">
                        <Image src={`/educationLogos/${education.logo.fileName}`} alt={education.logo.fileName} width={education.logo.width} height={education.logo.height}/>
                    </div>
                    <div className={`education-card-header-details ${urbanist300.className}`}>
                        <p>{education.institution}</p>
                        <p>{education.dates}</p>
                    </div>
                </div>
                <div className={`education-card-body ${urbanist100.className}`}>
                    <p>{education.description}</p>
                </div>
            </div>
        </motion.div>
    )
}