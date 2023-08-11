'use client'
import { urbanist100, urbanist300 } from "@/utils/fonts"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion'

const NavBar = () => {
    
    const handleScroll = sectionName => {
        const element = document.getElementById(`${sectionName}-title`)
        element.scrollIntoView({ 
            behavior: "smooth", 
            block: "end", 
            inline: "nearest" 
        });
    }

    return (
        <main className="navbar-main page-container">
            <div className="navbar-title-div">
                <p className={urbanist100.className}>Julio Salas</p>
            </div>
            <div className={`navbar-options-div ${urbanist300.className}`}>
                <motion.div 
                    whileTap={{ scale: 0.9 }}  
                    className="navbar-link"
                    onClick={() => handleScroll('technologies')}
                >
                    <p>Tech</p>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.9 }}  
                    className="navbar-link"
                    onClick={() => handleScroll('expereince')}
                >
                    <p>Exp</p>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.9 }}  
                    className="navbar-link"
                    onClick={() => handleScroll('education')}
                >
                    <p>Educ</p>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.8 }} 
                    onClick={()=> window.open('https://github.com/juliosalas89')}
                    className="navbar-button"
                >
                    <GitHubIcon fontSize="large"/>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.8 }} 
                    onClick={()=> window.open('https://www.linkedin.com/in/julio-alberto-salas/')}
                    className="navbar-button"
                >
                    <LinkedInIcon fontSize="large"/>
                </motion.div>
            </div>
        </main>
    )
}

export default NavBar