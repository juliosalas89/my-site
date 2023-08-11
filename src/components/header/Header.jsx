'use client'

import { urbanist100 } from "@/utils/fonts"
import {Snippet} from "@nextui-org/react"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
    
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
            <div className={`header-introduction ${urbanist100.className}`}>
                <p>Welcome to my WebSite. I'm a <span className="blue-text">Full Stack Developer</span> specialized in Javascript. I'm also a <span className="green-text">Mechanical Engineer</span>. Here you can check all the technologies I work with, some of my projects and my work experience.</p>
                <p>If you want to contact me send me an email or call me:</p>
            </div>
            <div className="contact-data-div">
                <EmailIcon/>
                <Snippet 
                    tooltipProps={tooltipsConfig}
                    symbol="" 
                    color="primary" 
                    className="w-64"
                >
                    julio.a.salas89@gamil.com
                </Snippet>
            </div>
            <div className="contact-data-div">
                <PhoneAndroidIcon/>
                <Snippet
                    tooltipProps={tooltipsConfig} 
                    symbol="" 
                    color="success" 
                    className="w-64"
                >
                    +34644608843
                </Snippet>
            </div>
        </main>
    )
}

export default Header