'use client'
import { urbanist100, urbanist300 } from "@/utils/fonts"
import { motion } from 'framer-motion'
import BarButtons from "../general/BarButtons"

const NavBar = ({techRef, expRef, educRef}) => {
    
    const handleScroll = sectionRef => {
        const element = sectionRef.current.querySelectorAll('div')
        element[0].scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: "nearest" 
        });
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <main className="navbar-main page-container">
            <div 
                className="navbar-title-div"
                onClick={scrollToTop}
            >
                <p className={urbanist100.className}>Julio Salas</p>
            </div>
            <div className={`navbar-options-div ${urbanist300.className}`}>
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
                <BarButtons/>
            </div>
        </main>
    )
}

export default NavBar