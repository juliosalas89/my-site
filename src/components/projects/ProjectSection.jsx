import { Image } from "@nextui-org/react";
import { urbanist300, urbanist100 } from "@/utils/fonts";
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ProjectSection ({project}) {
    const [image, setImage] = useState(1)
    const [animation, setAnimation] = useState({ opacity: 1 })

    const handleChangeImage = arrow => {
        const direction = arrow === 'left' ? -1 : 1
        const leftImage = image > 1 ? image-1 :  project.nrOfFiles
        const rightImage = image < project.nrOfFiles ? image+1 :  1
        setAnimation({ opacity: 0, scale: 0.9, x: -80 * direction })
        setTimeout(()=> {
            setImage(arrow === 'left' ? leftImage : rightImage)
            setAnimation({ opacity: 0, scale: 0.9, x: 80 * direction })
        }, 150)
        setTimeout(()=> {
            setAnimation({ opacity: 1, scale: 1, x: 0 })
        }, 300)
    }

    return (
        <main className="project-section-main">
            <div className="project-section-title">
                <p className={urbanist300.className}>{project.title}</p>
            </div>
            <div className="project-section-body">

                <div className="project-section-img-div">
                    <div className="project-img-container">
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={animation}
                            transition={{ duration: 0.15 }}
                        >
                            <Image
                                className="img-index"
                                width={'100%'}
                                alt="converter"
                                src={`/projectsImg/${project.fileName}${image}.webp`}
                            />
                        </motion.div>
                        <div className="project-arrows-container">
                            <motion.div className="project-arrow-button"
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale: 1.2}}
                                onClick={() => handleChangeImage('left')}
                            >
                                <ArrowBackIosNewIcon sx={{ fontSize: 30 }}/>
                            </motion.div>
                            <motion.div className="project-arrow-button"
                                whileTap={{ scale: 0.9 }}
                                whileHover={{scale: 1.2}}
                                onClick={() => handleChangeImage('right')}
                            >
                                <ArrowForwardIosIcon sx={{ fontSize: 30 }}/>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="project-section-details-div">
                    <div className="project-section-details-segment">
                        <p className={`project-section-body-subtitle gradient-text ${urbanist300.className}`}>Technologies used:</p>
                        <p className={`project-section-body-content ${urbanist100.className}`}>{project.technologies}</p>
                    </div>
                    <div className="project-section-details-segment">
                        <p className={`project-section-body-subtitle gradient-text ${urbanist300.className}`}>Description:</p>
                        <p className={`project-section-body-content ${urbanist100.className}`}>{project.description}</p>
                    </div>
                    <div className="project-section-details-segment">
                        <p className={`project-section-body-subtitle gradient-text ${urbanist300.className}`}>Links:</p>
                        <div className="code-link-div">
                            <p className={`project-section-body-content ${urbanist100.className}`}>Check the code here</p> 
                            <motion.div 
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.2 }}
                                onClick={()=> window.open(project.codeURL)}
                                className="bar-button"
                            >
                                <GitHubIcon fontSize="large"/>
                            </motion.div>
                        </div>
                        {
                            project.deployedURL ? (
                                <div>
                                    <motion.div 
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={()=> window.open(project.codeURL)}
                                        className="play-store-button-div"
                                    >
                                        <Image
                                            className="play-store-button"
                                            width={'100%'}
                                            alt="playStoreButton"
                                            onClick={()=> window.open(project.deployedURL)}
                                            src={`/projectsImg/play-store-button.png`}
                                        />
                                    </motion.div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </main>
    )   
}