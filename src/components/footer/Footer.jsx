import BarButtons from "../general/BarButtons"
import { urbanist100, urbanist300 } from "@/utils/fonts"
import ClipBoardButton from "../general/ClipboardButton";
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Footer () {
    const pathName = usePathname()
    const router = useRouter()
    return (
        <main className="footer-main page-container">
            <div className={`footer-subsection-div ${urbanist100.className}`}>
                <div className="personal-data-div">
                    <p className="personal-data-p">julio.a.salas89@gmail.com</p>
                    <ClipBoardButton payload='julio.a.salas89@gmail.com' placement='right' offset={26}/>
                </div>
                <div className="personal-data-div">
                    <p className="personal-data-p">+34644608843</p>
                    <ClipBoardButton payload='+34644608843' placement='right' offset={26}/>
                </div>

            </div>
            <div className={`footer-subsection-div gradient-text ${urbanist100.className}`}>
                developed by Julio Salas
            </div>
            <div className="footer-subsection-div-buttons">
                <motion.div
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}  
                    className={`navbar-link ${urbanist300.className}`}
                    onClick={() => pathName !== '/projects' && router.push('/projects') }
                >
                    <p>Projects</p>
                </motion.div>
                <BarButtons footer={true}/>
            </div>
        </main>
    )
}
