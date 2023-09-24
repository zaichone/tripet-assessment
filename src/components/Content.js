import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import AthleteImg from './AthleteImg'
import PlayerImg from './PlayerImg'

function Content(data) {
    //console.log("🚀 ~ file: Content.js:4 ~ Content ~ data:", data)
    return (
        <Box>
            {data.data.map((item, index) => {
                return (

                    <Box key={index} className={`section section-${item.title}`}>
                        {index == 0 ? <AthleteImg /> : <PlayerImg />}
                        <Container>
                            <Grid container spacing={2} className="section-grid" direction={index == 0 ? 'row-reverse' : 'row'}>
                                <Grid item xs={12} sm={8} md={6}>
                                    <Typography variant="h2" className="section-title">{item.title}</Typography>
                                </Grid>
                            </Grid>
                        </Container>

                        <Box className="section-subsection">
                            {item.subsection.map((item, ind) => {
                                return (
                                    <Box key={ind} className="subsection" sx={{ background: `${item.bg}`, color: `${item.color}`, p: {sm:4, md:7}, pb:{md:8}}}>
                                        <Container>
                                            <Grid container spacing={2} className="section-grid" direction={index == 0 ? 'row-reverse' : 'row'}>
                                                <Grid item xs={12} sm={8} md={6}>

                                                    <Typography variant="h3" className="subsection-title"><span className={ind ===2 ? "white-dash" : "dash"}>0{`${ind + 1}`}</span>{item.title}</Typography>
                                                    <Typography variant="body1" className="subsection-description">{item.description}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Box>
                                )
                            })}
                        </Box>


                    </Box>
                )
            })}
        </Box>
    )
}

export default Content