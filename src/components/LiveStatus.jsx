import React, { useState, useEffect, memo } from 'react'
import { m as motion } from "framer-motion"
import { portfolioData } from '../data/portfolio'

const LiveStatus = memo(() => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata' // Matching users local metadata
        })
    }

    return (
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">{portfolioData.profile.status}</span>
            </div>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className="text-[10px] font-medium tracking-widest text-white/80">{formatTime(time)} IST</span>
        </div>
    )
})

export default LiveStatus;
