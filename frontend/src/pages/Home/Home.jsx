import React from 'react'
import Banner from './components/Banner';
import { Grid, makeStyles } from '@material-ui/core';
import Featured from './components/Featured';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '50px',
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Banner />
            <Grid container justifyContent='center'>
                <Grid item xs={12} lg={10}>
                    {/* <Featured /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
