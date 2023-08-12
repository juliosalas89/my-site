import { motion } from 'framer-motion'
import Decimal from 'decimal.js'
import Image from 'next/image'
import { useEffect, useState, useRef} from 'react'

export default function TechIcon ({icon, iconsBoxDimensions, selectedTech, iconIndex, findAndSelectTech, boxInView}) {
    //In order to prevent icons to get trapped between 0 and 1, we start in a value between 2 and width-2, same for yPosition.current 
    const [xPosition, setXPosition] = useState(2 + Math.floor(Math.random() * (iconsBoxDimensions.width-64-4)))
    const yPosition = useRef(2 + Math.floor(Math.random() * (iconsBoxDimensions.height-64-4)))
    const [xDirection, setXDirection] = useState(Math.random() >= 0.5 ? 1 : -1)
    const [yDirection, setYDirection] = useState(Math.random() >= 0.5 ? 1 : -1)
    // displacement vector length must be equal to 2 so all the icons move at the same speed, therefore we need a trogonometrical composition of x,y
    const xDisplacement = useRef(Math.random() * 2)
    const yDisplacement = useRef(2 * (new Decimal(xDisplacement.current).div(2).acos().sin()))
    const [selectedPosition, setSelectedPosition] = useState(null)
    
    useEffect(() => {
        if(selectedTech || !boxInView) return
        const timer = setTimeout(()=>{
            changeDirection()
            mooveIcon()
         }, 100)
    }, [xPosition, yPosition , xDirection, yDirection, selectedTech, boxInView])

    useEffect(()=> {
        selectedTech && handleSelection()
    }, [selectedTech])

    const changeDirection = () => {
        if (xPosition < 1 || xPosition > (iconsBoxDimensions.width-64-1)) setXDirection(xDirection * -1)
        if (yPosition.current  < 1 || yPosition.current  > (iconsBoxDimensions.height-64-1)) setYDirection(yDirection * -1)
    }

    const mooveIcon = ()=> {
        yPosition.current  < 1 || yPosition.current  > (iconsBoxDimensions.height-64-1) ? 
            yPosition.current = yPosition.current  + (yDisplacement.current * yDirection * -1) : 
            yPosition.current = yPosition.current  + yDisplacement.current * yDirection

        xPosition < 1 || xPosition > (iconsBoxDimensions.width-64-1) ? 
            setXPosition(xPosition + (xDisplacement.current * xDirection * -1)) : 
            setXPosition(xPosition + xDisplacement.current * xDirection)
    }

    const handleSelection = () => {
        const position = selectedTech.iconsIndexes.indexOf(iconIndex)
        setSelectedPosition(position >= 0 ? position : null)
    }

    const calculateX = () => selectedTech && selectedPosition !== null ? 20 + 80*selectedPosition : xPosition
    const calculateY = () => !selectedTech ? yPosition.current  : selectedPosition !== null ? 20 : iconsBoxDimensions.height + 100

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