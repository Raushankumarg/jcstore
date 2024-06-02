import React from 'react'
import HeaderNavbar from '../HeaderNavbar'
import { Grid, Typography } from '@mui/material'

function AboutUs() {
    return (
        <div>
            <HeaderNavbar />


            <Grid direction="row" container spacing={5} style={{padding: '15px'}}> 

                <Grid item xs={12} sm={6} >
                   <img src="/images/aboutus.png" alt="about us" style={{width: '100%'}} />
                </Grid>

                <Grid item xs={12} sm={6} style={{color: 'red'}}>
                    <Typography variant="h2" component="p" >
                    Who We Are
                    </Typography>

                    <Typography variant="body1" component="p" >
                    Elegant auto accessories offers intricately designed auto and travel accessories created by dedicated tailors, pattern makers, designers and engineers for unmatched quality products. Since the last 35 years, the hands of each Elegant member in the factory are skilled to deliver nothing but the best. In the year 2006, the brand underwent a digitalised resurrection under the watchful eye of our founder, Mr. Sudhir Singhal. Constantly striving to provide the customers with a seamless shopping experience, we laid down our e-commerce platform in the year 2017 with the objective of providing a perfect blend of digtal and physical experience for the buyer.

                    <br /><br />
                    Elegant auto accessories offers intricately designed auto and travel accessories created by dedicated tailors, pattern makers, designers and engineers for unmatched quality products. Since the last 35 years, the hands of each Elegant member in the factory are skilled to deliver nothing but the best. In the year 2006, the brand underwent a digitalised resurrection under the watchful eye of our founder, Mr. Sudhir Singhal. Constantly striving to provide the customers with a seamless shopping experience, we laid down our e-commerce platform in the year 2017 with the objective of providing a perfect blend of digtal and physical experience for the buyer.



                    </Typography>
                </Grid>

            </Grid>


          





        </div>
    )
}

export default AboutUs
