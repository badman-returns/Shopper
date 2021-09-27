import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();



const GetAllProducts = async() => {
    try{
        const response = await axios.get(`https://course-api.com/react-store-products`);
        return response.data;
    } catch (error){
        throw new Error(error);
    }
}

export {
    GetAllProducts
}