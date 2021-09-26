import React from 'react'
import Banner from './components/Banner';
import { makeStyles } from '@material-ui/core';

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
        </div>
    )
}

export default Home
