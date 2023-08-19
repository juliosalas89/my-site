
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function BarButtons ({footer}) {
    const [widnowWidth, setWidnowWidth] = useState(null)
    const pathName = usePathname()
    const router = useRouter()

    useEffect(()=> {
        const width = window.visualViewport.width
        setWidnowWidth(width)
    })

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <main>
            <div className='bar-buttons-div'>
                {(widnowWidth > 649 || footer) && (
                    <motion.div 
                        whileTap={{ scale: 0.9 }}
                        whileHover={{scale: 1.2}}
                        onClick={() => pathName === '/' ? scrollToTop() : router.push('/')}
                        className="bar-button"
                    >
                        <HomeIcon sx={{ fontSize: widnowWidth < 380 ? 28 : 36 }}/>
                    </motion.div>
                )}
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{scale: 1.2}}
                    onClick={()=> window.open('https://github.com/juliosalas89')}
                    className="bar-button"
                >
                    <GitHubIcon sx={{ fontSize: widnowWidth < 380 ? 28 : 32 }}/>
                </motion.div>
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{scale: 1.2}}
                    onClick={()=> window.open('https://www.linkedin.com/in/julio-alberto-salas/')}
                    className="bar-button"
                >
                    <LinkedInIcon sx={{ fontSize: widnowWidth < 380 ? 28 : 32 }}/>
                </motion.div>
            </div>
        </main>
    )
}
