import { motion } from 'framer-motion'
import { urbanist100 } from '@/utils/fonts'

const TechCard = ({technology, setSelectedTechIndex, selectedTechIndex, techIndex}) => {
    const isSelected = selectedTechIndex === techIndex
    return (
        <main className="tech-card-main">
            <motion.div 
                className={`tech-card-div ${urbanist100.className} ${isSelected ? 'tech-is-selected' : ''}`}
                onClick={() => setSelectedTechIndex(!isSelected ? techIndex : null)} 
                whileTap={{ scale: 0.95 }}   
            >
                <p>{technology.label}</p>
            </motion.div>
        </main>
    )
} 

export default TechCard