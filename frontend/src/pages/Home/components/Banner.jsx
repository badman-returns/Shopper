import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    banner: {
        width: '100%',
    }
}))

function Banner() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={12}>
                <img src={process.env.PUBLIC_URL + 'banner.jpg'} className={classes.banner} alt='banner' />
            </Grid>
        </Grid>
    )
}

export default Banner
