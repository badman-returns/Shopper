import React from 'react'
import { makeStyles, Grid, Card, CardContent, CardActions, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: '100%',
        minHeight: '100%'
        // maxHeight: ""
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    image: {
        width: '200px',
        height: '300px',
    }
}))

function Product({ id, title, price, image }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justifyContent='center'>
                            <img src={image} alt="product" className={classes.image} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton aria-label="Add to Card">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>

    )
}

export default Product
