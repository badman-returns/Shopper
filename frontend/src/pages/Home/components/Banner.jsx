import React from 'react'
import { useHistory } from 'react-router';
import { Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: 'calc(100vh - 10)',
        margin: '5rem 2rem 5rem 10rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8rem',
        placeItems: 'center',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "& > *": {
            alignSelf: 'flex-start',
        }
    },
    descriptionHeading: {
        fontSize: '3rem',
        color: 'rgba(0,0,0,0.863)',
    },
    descriptionText: {
        marginTop: '2rem',
        marginBottom: '2rem',
        fontSize: '1.3rem',
        color: theme.secondary,
    },
    bannerImage: {
        height: '550px',
        width: '100%',
        borderRadius: '10px',
    },
    shopNowBtn: {
        fontSize: '1.2rem',
    }
}))

function Banner() {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Grid className={classes.description}>
                <h1 className={classes.descriptionHeading}>
                    Design Your
                    <br />
                    Comfort Zone
                </h1>
                <Grid className={classes.descriptionText}>
                    Search and filter for products, add to cart, checkout, and make
                    payment.
                </Grid>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    disableElevation
                    className={classes.shopNowBtn}
                    onClick={() => history.push("/products")}
                >
                    Shop Now
                </Button>
            </Grid>
            <Grid className="imgContainer">
                <img src={process.env.PUBLIC_URL + 'banner.jpg'} alt="" className={classes.bannerImage} />
            </Grid>
        </Grid>
    )
}

export default Banner
