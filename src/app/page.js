'use client'

import NavBar from "@/components/navbar/NavBar"
import Header from "@/components/header/Header"
import Technologies from "@/components/technologies/Technologies"
import Experience from "@/components/experience/Experience"
import Education from "@/components/education/Education"
import Footer from "@/components/footer/Footer"
import { useRef } from "react"

export default function Home() {
    const techRef = useRef(null)
    const expRef = useRef(null)
    const educRef = useRef(null)

    return (
        <main>
            <NavBar techRef={techRef} expRef={expRef} educRef={educRef}></NavBar>
            <div className="page-container page-general-styles">
                <Header />
                <Technologies ref={techRef}/>
                <Experience ref={expRef}/>
                <Education ref={educRef}/>
            </div>
            <Footer/>
        </main>
  )
}
