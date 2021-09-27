import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { setProductDetails } from "../../store/actions/products";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: "100px",
        padding: '12px'
    },
    main: {
        minHeight: "calc(80vh -10rem)",
        width: "100%",
        padding: "4rem 10rem",
        marginBottom: "2rem",
    },
    mainContent: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
        columnGap: "4rem",
        gridAutoRows: "600px",
    },
    images: {
        display: "flex",
        flexDirection: "column",
        "& img": {
            borderRadius: "5px",
            width: "100%",
            objectFit: "cover",
        },
    },
    primaryImage: {
        height: "400px",
    },
    secondaryImages: {
        marginTop: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        columnGap: "10px",
        gridAutoRows: "80px",
        cursor: "pointer",
        "& img": {
            height: "100%",
        },
    },
    activeImage: {
        border: "2px solid #d81b60",
    },
    productDetails: {
        display: "flex",
        flexDirection: "column",
        "& button": {
            alignSelf: "flex-start",
        },
    },
    productPrice: {
        color: "#d81b60",
    },
    productReview: {
        display: "flex",
        alignItems: "center",
        "& div": {
            color: "#324d67",
        },
    },
    productDescription: {
        lineHeight: 2,
    },
    productInfo: {
        marginBottom: "2rem",
        fontSize: "1.1rem",
        "& span": {
            fontWeight: "bold",
        },
    },
    productCount: {
        display: "flex",
        alignItems: "center",
        fontWeight: "600",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen',
        marginBottom: "2rem",
        "& span": {
            fontSize: "2rem",
            cursor: "pointer",
        },
        "& div": {
            fontSize: "4rem",
            margin: "0rem 2rem",
        },
    },
}));

function ProductDetails() {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split("/").reverse()[0];
    const [currentImage, setCurrentImage] = useState(null);
    const [count, setCount] = useState(1);

    const product = useSelector((state) => state.products.productDetails);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count !== 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        axios
            .get(`https://course-api.com/react-store-single-product?id=${id}`)
            .then((response) => {
                dispatch(setProductDetails(response.data));
                setCurrentImage(response.data.images[0].url);
            });
    }, [dispatch, id]);

    return (
        <Grid container className={classes.root}>
            <Grid className={classes.main}>
                <Grid className={classes.mainContent}>
                    <Grid className={classes.images}>
                        <img
                            src={currentImage}
                            alt="primary"
                            className={classes.primaryImage}
                        />
                        <Grid className={classes.secondaryImages}>
                            {product.images.map((image) => (
                                <img
                                    src={image.url}
                                    alt="single"
                                    key={image.id}
                                    onClick={() => setCurrentImage(image.url)}
                                    className={`${currentImage === image.url ? classes.activeImage : null
                                        }`}
                                />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid className={classes.productDetails}>
                        <h1 className="capitalize">{product.name}</h1>
                        <br />
                        <h3 className={classes.productPrice}>&#8377; {product.price}</h3>
                        <br />
                        <Grid className={classes.productReview}>
                            <Rating name="read-only" value={product.stars} readOnly />
                            <div>&nbsp;&nbsp; ({product.reviews} customer reviews)</div>
                        </Grid>
                        <br />
                        <Grid className={classes.productDescription}>
                            {product.description}
                        </Grid>
                        <br />
                        <Grid className={classes.productInfo}>
                            <span>Availability:&nbsp;&nbsp;&nbsp;</span>
                            <>{product.stock ? "In stock" : "Out of stock"}</>
                        </Grid>
                        <Grid className={classes.productInfo}>
                            <span>Brand:&nbsp;&nbsp;&nbsp;</span>
                            <>{product.company}</>
                        </Grid>
                        <Grid className={classes.productCount}>
                            <span onClick={decrement}>-</span>
                            <div>{count}</div>
                            <span onClick={increment}>+</span>
                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                        // onClick={() => {
                        //   handleAddToCart();
                        //   history.push("/cart");
                        // }}
                        >Add to Cart</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductDetails;