import { motion } from 'framer-motion'

const TechCard = ({technology, setSelectedTechIndex, selectedTechIndex, techIndex}) => {
    
    return (
        <main className="tech-card-main">
            <motion.div 
                className={`tech-card-div ${selectedTechIndex === techIndex ? 'tech-is-selected' : ''}`}
                onClick={() => setSelectedTechIndex(techIndex)} 
                whileTap={{ scale: 0.95 }}   
            >
                <p>{technology.label}</p>
            </motion.div>
        </main>
    )
} 

export default TechCard