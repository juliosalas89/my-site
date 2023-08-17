'use client'
import { urbanist100, urbanist300 } from "@/utils/fonts"
import { motion } from 'framer-motion'
import BarButtons from "../general/BarButtons"
import { usePathname, useRouter } from 'next/navigation'
import { useRef } from "react"

export default function NavBar ({techRef, expRef, educRef}) {
    const widnowWidth = useRef(window.visualViewport.width)
    const pathName = usePathname()
    const router = useRouter()
    
    const handleScroll = sectionRef => {
        const element = sectionRef.current.querySelectorAll('div')
        element[0].scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: "nearest" 
        });
    }

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <main className="navbar-main page-container">
            <div 
                className="navbar-title-div"
                onClick={() => pathName === '/' ? scrollToTop() : router.push('/')}
            >
                <p className={urbanist100.className}>Julio Salas</p>
            </div>
            <div className={`navbar-options-div ${urbanist300.className}`}>
                {
                    pathName === '/' && widnowWidth.current > 570 && (
                    <>
                        <motion.div
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}  
                            className="navbar-link"
                            onClick={() => handleScroll(techRef)}
                        >
                            <p>Tech</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}  
                            className="navbar-link"
                            onClick={() => handleScroll(expRef)}
                        >
                            <p>Exp</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}  
                            className="navbar-link"
                            onClick={() => handleScroll(educRef)}
                        >
                            <p>Educ</p>
                        </motion.div>
                    </>)
                }
                {
                    pathName === '/' && (
                        <motion.div
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}  
                            className="navbar-link"
                            onClick={() => pathName !== '/projects' && router.push('/projects') }
                        >
                            <p>Projects</p>
                        </motion.div>
                    )
                }
                <BarButtons/>
            </div>
        </main>
    )
}