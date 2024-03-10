import AnimatedAppearance from "../general/AnimatedAppearance"
import { urbanist100, urbanist600 } from "@/utils/fonts"
import ProjectSection from "./ProjectSection"
import { useRef } from "react"
import proj from '../../appContent/projects.json'

export default function Projects () {
    const projects = useRef(proj.list)
    return (
        <main className="projects-main">
            <AnimatedAppearance>
                <div className='title-main-container'>
                    <div className={urbanist600.className}>
                        <p className="title-mid">My <span className="green-text">Projects:</span></p>
                    </div>
                    <div className={`subtitle-div ${urbanist100.className}`}>
                        <p>These are some of my projects, a little preview and links.</p>
                    </div>
                </div>
            </AnimatedAppearance>
            {projects.current.map((project, index) => <ProjectSection key={index} project={project}/>)} 
        </main>
    )

}