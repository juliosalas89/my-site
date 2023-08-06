import { motion } from "framer-motion"

const TechInfoBanner = ({unselectTech})=> {
    return (
        <motion.div
            className="tech-info-banner-div"
            animate={{ height: '100%', width: '100%', scale:1, borderRadius: '1.9rem'}}
            onClick={unselectTech}
            transition={{ duration: 0.4 }}
        >

        </motion.div>
    )
}

export default TechInfoBanner