import BarButtons from "../general/BarButtons"
import { urbanist300, urbanist100 } from "@/utils/fonts"
import ClipBoardButton from "../general/ClipboardButton";

const Footer = ()=> {

    return (
        <main className="footer-main page-container">
            <div className={`footer-subsection-div ${urbanist300.className}`}>
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
            <div className="footer-subsection-div">
                <BarButtons/>
            </div>
        </main>
    )
}

export default Footer