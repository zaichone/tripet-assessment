import React, { useState, useEffect } from 'react'

import player from '../assets/player.png';
import playersm from '../assets/playersm.png';
import playerxs from '../assets/playerxs.png';

export default function PlayerImg() {
    const [width, setWindowWidth] = useState(0);
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    useEffect(() => {
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => {
            window.removeEventListener('resize', updateDimensions)
        }
    }, []);
    if (width > 900) {
        return (
            <img src={player} alt="player" style={{ position: 'absolute', top: 5, right: '5%', width: '50%', height: 'auto', zIndex:99 }} />
        )
    }else {
        return (
            <img src={playersm} alt="football" style={{ position: 'absolute', top: '5%', right: 0, width: '50%', height: 'auto', zIndex:99 }} />
        )
    }
}