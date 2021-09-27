import React from 'react'
import Product from '../../../components/product/Product';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

function Featured() {
    const featuredProducts = useSelector(state => state.featured.products);
    console.log(featuredProducts);

    return (
        <Grid item xs={12}>
            <Grid container spacing={2}>
                {featuredProducts && featuredProducts.map((product) => (
                    <Grid item xs={12} lg={4} key={product.id} >
                        <Product id={product.id} title={product.title} price={product.price} image={product.image} />
                    </Grid>
                ))
                }
            </Grid>
        </Grid>
    )
}

export default Featured
