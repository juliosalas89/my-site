import { motion } from "framer-motion"
import { urbanist300 } from "@/utils/fonts"

export default function TechInfoBanner ({unselectTech, iconsBoxDimensions, selectedTech}) {
    return (
        <motion.div
            className="tech-info-banner-div"
            animate={{ height: iconsBoxDimensions.height, width: iconsBoxDimensions.width + 4, x: -2, borderRadius: 0 }}
            onClick={unselectTech} 
            transition={{ duration: 0.4 }}
        >
            <p className={urbanist300.className}>{selectedTech.description}</p>
        </motion.div>
    )
}