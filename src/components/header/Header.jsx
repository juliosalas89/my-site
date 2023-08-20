'use client'

import { urbanist100, urbanist300, urbanist600 } from "@/utils/fonts"
import ClipBoardButton from "../general/ClipboardButton"
import Image from "next/image"

export default function Header () {
    
    const tooltipsConfig = {
        radius: "sm",
        color: "foreground",
        content: "Copy to clipboard",
        placement: "top",
        closeDelay: 0, 
        classNames: {
            base: urbanist100.className,
        }
    }
    
    return (
        <main className="header-main">
            <section className={`header-introduction-section`}>
                <p className={`header-subtitle ${urbanist300.className}`}><span className="green-text">Welcome</span> to my WebSite!</p>
                <p className={urbanist100.className}>I&#039;m a <span className="green-text">Full Stack Developer</span> specializing in <span className="blue-text">JavaScript</span> and a Mechanical <span className="green-text">Engineer</span>. Currently located in Spain, Valencia. Here you can check all the technologies I work with, some of my projects and my work experience.</p>
            </section>
            <section className="header-language-section">
                <p className={`header-subtitle ${urbanist300.className}`}>Languages <span className="green-text">I speak:</span></p>
                <div className="header-languages-item">
                    <div className="flag-div">
                        <Image src="/flags/Spain.png" alt="spain-flag" width="40" height="10" />
                    </div>
                    <p className="header-languages-content"><span className={urbanist300.className}>Spanish: </span><span className={urbanist100.className}> Native</span></p>
                </div>
                <div className="header-languages-item">
                    <div className="flag-div">
                        <Image src="/flags/UK.png" alt="spain-flag" width="40" height="10" />
                    </div>
                    <p className="header-languages-content"><span className={urbanist300.className}>English: </span><span className={urbanist100.className}> C 1</span></p>
                </div>
                <div className="header-languages-item">
                    <div className="flag-div">
                        <Image src="/flags/Germany.png" alt="spain-flag" width="40" height="10" />
                    </div>
                    <div className="content-div">
                        <p className="header-languages-content"><span className={urbanist300.className}>German: </span><span className={urbanist100.className}> Not even close, but I started studing it a few months ago and I&#039;m determinated to learn it.</span></p>
                    </div>
                </div>
            </section>
            <section className={`header-contact-section ${urbanist300.className}`}>
                <p className={`header-subtitle ${urbanist600.className}`}><span className="blue-text">Contact</span> me:</p>
                <div>
                    <div className="header-personal-data-div">
                        <p className={`header-personal-data-p ${urbanist100.className}`}>julio.a.salas89@gmail.com</p>
                        <ClipBoardButton payload='julio.a.salas89@gmail.com' placement='right' offset={26}/>
                    </div>
                    <div className="header-personal-data-div">
                        <p className={`header-personal-data-p ${urbanist100.className}`}>+34644608843</p>
                        <ClipBoardButton payload='+34644608843' placement='right' offset={26}/>
                    </div>
                </div>
            </section>
        </main>
    )
}