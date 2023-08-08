import { motion } from "framer-motion"

const TechInfoBanner = ({unselectTech, iconsBoxWidth})=> {
    return (
        <motion.div
            className="tech-info-banner-div"
            animate={{ height: 320, width: iconsBoxWidth + 4, x: -2, borderRadius: 0 }}
            onClick={unselectTech} 
            transition={{ duration: 0.4 }}
        >
            <p>Im julio and im a programer</p>
        </motion.div>
    )
}

export default TechInfoBanner