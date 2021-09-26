import React from 'react'
import { useSelector } from 'react-redux';
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
    logo:{
        color: 'rgba(0, 0, 0, 0.863)',
    }
}))

function Navbar() {
    const classes = useStyles();
    const categories = useSelector(state => state.categories.categories);

    return (
        <div>
            <AppBar position='fixed' elevation={0} color='inherit'>
                <Toolbar>
                    <Grid container>
                        <Grid item md={7} xl={8}>
                            <Grid container alignItems='center'>
                                <Grid item md={3} xl={4}>
                                    <Grid container justifyContent='center'>
                                        <Typography variant='h4' className={classes.logo}><b>Shopper</b></Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={9} xl={8}>
                                    <Grid container justifyContent='space-between'>
                                        {categories && categories.map((category) => (
                                            <Grid item key={category}>
                                                <Typography variant='subtitle1' className="animate">
                                                    <b className={classes.categories}>{category}</b>
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={5} xl={4}>
                            <Grid container justifyContent='flex-end'>
                                <Grid item md={4} xl={4}>
                                    <Grid container justifyContent='space-around'>
                                        <Button variant='contained' color='primary'>
                                            <Typography variant='button'>Login</Typography>
                                        </Button>
                                        <Button variant='contained' color='primary'>
                                            <Typography variant='button'>SignUp</Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
