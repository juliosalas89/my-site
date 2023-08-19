'use client'

import NavBar from "@/components/navbar/NavBar"
import Footer from "@/components/footer/Footer"
import Projects from "@/components/projects/Projects"

export default function ProjectsPage () {
    return (
        <main>
            <NavBar></NavBar>
            <div className="page-container page-general-styles">
                <Projects/>
            </div>
            <Footer/>
        </main>
    )
} 