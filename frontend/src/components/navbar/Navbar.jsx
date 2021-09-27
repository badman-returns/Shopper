import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Grid, Typography, Button } from '@material-ui/core';
import './navbar.css';

const useStyles = makeStyles(() => ({
    categories: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.863)',
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    logo: {
        color: 'rgba(0, 0, 0, 0.863)',
    }
}))

function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='fixed' elevation={1} color='inherit'>
                <Toolbar>
                    <Grid container>
                        <Grid item md={6} xl={6}>
                            <Grid container alignItems='center'>
                                <Grid item md={5} xl={6}>
                                    <Grid container justifyContent='center'>
                                        <Typography variant='h4' className={classes.logo}><b>Shopper</b></Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7} xl={6}>
                                    <Grid container justifyContent='space-between'>
                                        <Grid item>
                                            <Typography component={Link} to='/' variant='subtitle1' style={{textDecoration:'none'}} className="animate">
                                                <b className={classes.categories}>Home</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='subtitle1' style={{textDecoration:'none'}} className="animate">
                                                <b className={classes.categories}>About</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography component={Link} to='products' variant='subtitle1' style={{textDecoration:'none'}} className="animate">
                                                <b className={classes.categories}>Products</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={6} xl={6}>
                            <Grid container justifyContent='flex-end'>
                                {/* <Grid item md={4} xl={12}> */}
                                <Button variant='contained' color='primary'>
                                    <Typography variant='button'>Login</Typography>
                                </Button>
                                {/* </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
