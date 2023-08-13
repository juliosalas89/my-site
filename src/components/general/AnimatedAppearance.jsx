'use client'

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function AnimatedAppearance ({children}) {
    const [animation, setAnimation] = useState({ opacity: 0, scale: 0.5 })
    const element = useRef(null)
    const inView = useInView(element)

    // const [xOffset, setXOffset] = useState(15)
    // const [firstDelay, setFirstDelay] = useState(true)

    // useEffect(() => {
    //     const timer = setTimeout(()=>{
    //         mooveTitle()
    //         setFirstDelay(false)
    //     }, 5000 + (firstDelay ? delay : 0))
    // }, [xOffset])

    // const mooveTitle = () => setXOffset(xOffset ? 0 : 15)
    
    useEffect(()=> {
        setAnimation(inView && { opacity: 1, scale: 1 } || { opacity: 0, scale: 0.5 })
    }, [inView])

    return (
        <motion.div
            ref={element}
            animate={animation}
            >
            {children}
        </motion.div>
    )
}