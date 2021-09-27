import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Product from '../../components/product/Product';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '100px',
    }
}))

function Products() {
    const classes = useStyles();
    const products = useSelector(state => state.products.products);

    return (
        <Grid container className={classes.root}>
            <Grid item lg={2} xl={3}>
            </Grid>
            <Grid item lg={9} xl={8}>
                <Grid container spacing={2}>
                    {
                        products && products.map((product) => (
                            <Grid item xs={12} lg={4}>
                                <Product
                                    id={product.id}
                                    name={product.name}
                                    company={product.company}
                                    price={product.price}
                                    image={product.image}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Products
