
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

export default function BarButtons () {
    return (
        <main>
            <div className='bar-buttons-div'>
                <motion.div 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{scale: 1.2}}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="bar-button"
                >
                    <HomeIcon fontSize="large"/>
                </motion.div>
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
