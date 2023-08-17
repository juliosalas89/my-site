
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import { usePathname, useRouter } from 'next/navigation'
import { useRef } from 'react';

export default function BarButtons ({footer}) {
    const widnowWidth = useRef(window.visualViewport.width)
    const pathName = usePathname()
    const router = useRouter()
    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <main>
            <div className='bar-buttons-div'>
                {(widnowWidth.current > 649 || footer) && (
                    <motion.div 
                        whileTap={{ scale: 0.9 }}
                        whileHover={{scale: 1.2}}
                        onClick={() => pathName === '/' ? scrollToTop() : router.push('/')}
                        className="bar-button"
                    >
                        <HomeIcon fontSize="large"/>
                    </motion.div>
                )}
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{scale: 1.2}}
                    onClick={()=> window.open('https://github.com/juliosalas89')}
                    className="bar-button"
                >
                    <GitHubIcon fontSize="large"/>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{scale: 1.2}}
                    onClick={()=> window.open('https://www.linkedin.com/in/julio-alberto-salas/')}
                    className="bar-button"
                >
                    <LinkedInIcon fontSize="large"/>
                </motion.div>
            </div>
        </main>
    )
}
