import React from 'react'
import { Box, Typography } from '@mui/material'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import footballxs from '../assets/footballxs.png';
import playerxs from '../assets/playerxs.png';

function ContentMobile(data) {
    console.log("🚀 ~ file: ContentMobile.js:10 ~ ContentMobile ~ data:", data)
    const athleteMapped = data?.data[0]?.subsection?.map((sub, index) =>
        <Box key={index} sx={{ background: `${sub.bg}`, p: 3, pt: 9, pb: 10 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '40px', lineHeight: '60px', borderBottom: '5px solid #603EBE', mr: 1 }}>0{index + 1}</Typography>
                <Typography variant="h3" sx={{ fontSize: '36px', color: '#C2C2C2' }}>{sub.title}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 15, mt: 3, color: `${sub.color}` }}>{sub.description}</Typography>
        </Box>
    );
    const playersMapped = data?.data[1]?.subsection?.map((sub, index) =>
        <Box key={index} sx={{ background: `${sub.bg}`, p: 3, pb: 10 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h2" sx={{ fontSize: '30px', lineHeight: '60px', borderBottom: `5px solid ${sub.color}`, mr: 1 }}>0{index + 1}</Typography>
                <Typography variant="h3" sx={{ fontSize: '28px', color: '#C2C2C2' }}>{sub.title}</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontSize: 15, mt: 3, color: `${sub.color}` }}>{sub.description}</Typography>
        </Box>
    );
    return (
        <Box className="">
            <Box sx={{ position: 'relative' }} className="section section-ATHLETS">
                <img src={footballxs} alt="football" style={{ position: 'absolute', top: 75, left: '18%', width: '65%', height: 'auto', zIndex: 99 }} />

                <Box sx={{ minHeight: 300, background: 'white', pl: 2, pt: 2, pb: 7 }}>
                    <Typography variant="h1" className="section-title" sx={{ fontSize: 50, color: '#E7E7E7' }}>ATHLETS</Typography>
                </Box>
                <Box>

                    <AliceCarousel mouseTracking items={athleteMapped} />
                </Box>


            </Box>
            <Box sx={{ position: 'relative' }} className="section section-PLAYERS">
                <img src={playerxs} alt="player" style={{ position: 'absolute', top: 110, right: '5%', width: '90%', height: 'auto',zIndex:99 }} />
                <Box sx={{ minHeight: 300, background: 'white', pl: 2, pt: 2, pb: 7 }}>
                    <Typography variant="h1" className="section-title" sx={{ fontSize: 50, color: '#E7E7E7' }}>PLAYERS</Typography>
                </Box>
                <Box>

                    <AliceCarousel mouseTracking items={playersMapped} />
                </Box>


            </Box>
        </Box>

    )
}

export default ContentMobile