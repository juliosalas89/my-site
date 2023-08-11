import Technologies from "@/components/technologies/Technologies"
import Education from "@/components/education/Education"
import Experience from "@/components/experience/experience"
import NavBar from "@/components/navbar/NavBar"
import Header from "@/components/header/Header"

export default function Home() {
    return (
        <main>
            <NavBar></NavBar>
            <div className="page-container page-general-styles">
                <Header/>
                <Technologies/>
                <Experience/>
                <Education/>
            </div>
        </main>
  )
}
