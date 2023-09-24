import React, { useState, useEffect } from 'react'

import football from '../assets/football.png';
import footballsm from '../assets/footballsm.png';
import footballxs from '../assets/footballxs.png';

export default function AthleteImg() {
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
            <img src={football} alt="football" style={{ position: 'absolute', top: 35, left: '14%', width: '31%', height: 'auto', zIndex:99 }} />
        )
    }    else {
        return (
            <img src={footballsm} alt="football" style={{ position: 'absolute', top: '20%', left: '-10px', width: '40%', height: 'auto', zIndex:99 }} />
        )
    }
}