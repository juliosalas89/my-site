import { motion } from 'framer-motion'
import Decimal from 'decimal.js'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TechIcon = ({iconName, iconsBoxWidth, selectedTech, iconIndex, findAndSelectTech})=> {
    //In order to prevent icons to get trapped with between 0 and 1, we start in a value between 2 and width-2, same for yPosition
    const [xPosition, setXPosition] = useState(2 + Math.floor(Math.random() * (iconsBoxWidth-64-4)))
    const [yPosition, setYPosition] = useState(2 + Math.floor(Math.random() * (320-64-4)))
    const [xDirection, setXDirection] = useState((Math.random() - 0.5) >= 0 ? 1 : -1)
    const [yDirection, setYDirection] = useState((Math.random() - 0.5) >= 0 ? 1 : -1)
    // displacement vector length must be equal to 2 so all the icons move at the same speed, therefore we need a trogonometrical composition of x,y
    const [xDisplacement] = useState(Math.random() * 2)
    const [yDisplacement] = useState(2 * (new Decimal(xDisplacement).div(2).acos().sin()))
    const [selected, setSelected] = useState(false)
    
    useEffect(() => {
        if(selectedTech) return
        const timer = setTimeout(()=>{
            changeDirection()
            mooveIcon()
         }, 100)
    }, [xPosition, yPosition, xDirection, yDirection, selectedTech])


    const changeDirection = () => {
        if (xPosition < 1 || xPosition > (iconsBoxWidth-64-1)) setXDirection(xDirection * -1)
        if (yPosition < 1 || yPosition > (320-64-1)) setYDirection(yDirection * -1)
    }

    const mooveIcon = ()=> {
        xPosition < 1 || xPosition > (iconsBoxWidth-64-1) ? 
            setXPosition(xPosition + (xDisplacement * xDirection * -1)) : 
            setXPosition(xPosition + xDisplacement * xDirection)
            
        yPosition < 1 || yPosition > (320-64-1) ? 
            setYPosition(yPosition + (yDisplacement * yDirection * -1)) : 
            setYPosition(yPosition + yDisplacement * yDirection)
    }

    const handleClick = ()=> {
        findAndSelectTech(selected ? null : iconIndex)
        setSelected(!selected)
    }

    return (
        <motion.div 
            className="tech-icon-div"
            animate={selected ? 
                { height: 320, width: iconsBoxWidth, scale:1, borderRadius: '2rem', x: 0, y: 0} : 
                { x: xPosition, y: yPosition }
            }
            whileHover={selected ? {} : { scale: 1.4, rotate: 360 }}
            onClick={handleClick}
        >
            <Image src={`/techIcons/${iconName}.png`} alt={`${iconName}-icon`} width="40" height="40" />
        </motion.div>
    )
}

export default TechIcon