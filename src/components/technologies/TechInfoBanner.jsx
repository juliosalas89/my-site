import { motion } from "framer-motion"
import { urbanist300 } from "@/utils/fonts"

const TechInfoBanner = ({unselectTech, iconsBoxWidth, selectedTech})=> {
    return (
        <motion.div
            className="tech-info-banner-div"
            animate={{ height: 320, width: iconsBoxWidth + 4, x: -2, borderRadius: 0 }}
            onClick={unselectTech} 
            transition={{ duration: 0.4 }}
        >
            <p className={urbanist300.className}>{selectedTech.description}</p>
        </motion.div>
    )
}

export default TechInfoBanner