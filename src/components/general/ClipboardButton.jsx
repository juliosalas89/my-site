'use client'

import { urbanist100 } from "@/utils/fonts"
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';

export default function ClipBoardButton ({message = 'Copy to clipboard', payload, placement = 'top', offset = 7}) {
    const [tickStyle, setTickStyle] = useState({ opacity: 0, scale: 0.4 })
    const [copyStyle, setCopyStyle] = useState({ opacity: 1, scale: 1 })

    const copyToClipboard = string => {
        navigator.clipboard.writeText(string).then(() => handleCopied())
    }

    const handleCopied = () => {
        setCopyStyle({ opacity: 0, scale: 0.4 })

        setTimeout(() => {
            setTickStyle({ opacity: 1, scale: 1 })
        }, 150)
        setTimeout(() => {
            setTickStyle({ opacity: 0, scale: 0.4 })
        }, 1050)
        setTimeout(() => {
            setCopyStyle({ opacity: 1, scale: 1 })
        }, 1200)
    }


    return (
        <Tooltip
            classNames={{base: `tooltip-background ${urbanist100.className}`}}
            placement={placement}
            delay={ 0 }
            content={message}
            showArrow={true}
            radius="sm"
            closeDelay={0}
            offset={offset}
        >   
            <div className="clipboard-button-div">
                <motion.div
                    className="clipboard-button-icon"
                    transition={{ duration: 0.15 }}
                    animate={tickStyle}
                    whileHover={{ scale: 1.2 }}
                >
                        <DoneIcon sx={{ color: '#45D483' }} fontSize="small"/>
                </motion.div>
                <motion.div
                    className="clipboard-button-icon copy-button"
                    transition={{ duration: 0.15 }}
                    animate={copyStyle}
                    whileHover={{scale: 1.2}}
                    onClick={() => copyToClipboard(payload)}
                    >
                        <ContentCopyIcon fontSize="small"/>
                </motion.div>
            </div>
        </Tooltip>
    )
}