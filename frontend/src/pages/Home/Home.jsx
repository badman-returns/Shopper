import React from 'react'
import Banner from './components/Banner';
import { Grid, makeStyles } from '@material-ui/core';
import Featured from './components/Featured';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Banner />
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Featured />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
