import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();

const GetCatergories = async() => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_FAKESTORE_API}/products/categories`);
        return response.data;
    } catch(error){
        throw new Error(error);
    }
}

const GetAllProducts = async() => {
    try{
        const response = await axios.get(`${process.env.REACT_APP_FAKESTORE_API}/products?limit=6`);
        return response.data;
    } catch (error){
        throw new Error(error);
    }
}

export {
    GetCatergories,
    GetAllProducts
}