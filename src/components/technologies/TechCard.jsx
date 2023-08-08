import { motion } from 'framer-motion'

const TechCard = ({technology, setSelectedTechIndex, selectedTechIndex, techIndex}) => {
    const isSelected = selectedTechIndex === techIndex
    return (
        <main className="tech-card-main">
            <motion.div 
                className={`tech-card-div ${isSelected ? 'tech-is-selected' : ''}`}
                onClick={() => setSelectedTechIndex(!isSelected ? techIndex : null)} 
                whileTap={{ scale: 0.95 }}   
            >
                <p>{technology.label}</p>
            </motion.div>
        </main>
    )
} 

export default TechCard