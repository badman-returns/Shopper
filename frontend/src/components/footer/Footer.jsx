import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#000',
        color: '#d81b60',
        height: '7vh',
    },
}))

function Footer() {
    const classes = useStyles();

    return (
        <Grid container justifyContent='center' alignItems='center' className={classes.root}>
            &copy; {new Date().getFullYear()} <span>CloneCart.</span> &nbsp; All Rights Reserved.
        </Grid>
    )
}

export default Footer
