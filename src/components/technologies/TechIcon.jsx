import { motion } from 'framer-motion'
import Decimal from 'decimal.js'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TechIcon = ({icon, iconsBoxDimensions, selectedTech, iconIndex, findAndSelectTech, boxInView})=> {
    //In order to prevent icons to get trapped between 0 and 1, we start in a value between 2 and width-2, same for yPosition
    const [xPosition, setXPosition] = useState(2 + Math.floor(Math.random() * (iconsBoxDimensions.width-64-4)))
    const [yPosition, setYPosition] = useState(2 + Math.floor(Math.random() * (iconsBoxDimensions.height-64-4)))
    const [xDirection, setXDirection] = useState(Math.random() >= 0.5 ? 1 : -1)
    const [yDirection, setYDirection] = useState(Math.random() >= 0.5 ? 1 : -1)
    // displacement vector length must be equal to 2 so all the icons move at the same speed, therefore we need a trogonometrical composition of x,y
    const [xDisplacement] = useState(Math.random() * 2)
    const [yDisplacement] = useState(2 * (new Decimal(xDisplacement).div(2).acos().sin()))
    const [selectedPosition, setSelectedPosition] = useState(null)
    
    useEffect(() => {
        if(selectedTech || !boxInView) return
        const timer = setTimeout(()=>{
            changeDirection()
            mooveIcon()
         }, 100)
    }, [xPosition, yPosition, xDirection, yDirection, selectedTech, boxInView])

    useEffect(()=> {
        selectedTech && handleSelection()
    }, [selectedTech])

    const changeDirection = () => {
        if (xPosition < 1 || xPosition > (iconsBoxDimensions.width-64-1)) setXDirection(xDirection * -1)
        if (yPosition < 1 || yPosition > (iconsBoxDimensions.height-64-1)) setYDirection(yDirection * -1)
    }

    const mooveIcon = ()=> {
        xPosition < 1 || xPosition > (iconsBoxDimensions.width-64-1) ? 
            setXPosition(xPosition + (xDisplacement * xDirection * -1)) : 
            setXPosition(xPosition + xDisplacement * xDirection)
            
        yPosition < 1 || yPosition > (iconsBoxDimensions.height-64-1) ? 
            setYPosition(yPosition + (yDisplacement * yDirection * -1)) : 
            setYPosition(yPosition + yDisplacement * yDirection)
    }

    const handleSelection = () => {
        const position = selectedTech.iconsIndexes.indexOf(iconIndex)
        setSelectedPosition(position >= 0 ? position : null)
    }

    const calculateX = () => selectedTech && selectedPosition !== null ? 20 + 80*selectedPosition : xPosition
    const calculateY = () => !selectedTech ? yPosition : selectedPosition !== null ? 20 : iconsBoxDimensions.height + 100

    return (
        <motion.div
            className="tech-icon-div"
            animate={
                { x: calculateX(), y: calculateY() }
            }
            transition={{ duration: 0.4 }}
            whileHover={{ duration: 0.1, scale: 1.4 }}
            onClick={() => findAndSelectTech(iconIndex)}
        >
            <Image src={`/techIcons/${icon.fileName}`} alt={`icon-${icon.fileName}`} width={icon.width} height={icon.height} />
        </motion.div>
    )
}

export default TechIcon