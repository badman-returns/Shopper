import axios from 'axios';

const GetAllProducts = async() => {
    try{
        const response = await axios.get(`https://course-api.com/react-store-products`);
        return response.data;
    } catch (error){
        throw new Error(error);
    }
}

const GetProductById = async(id) => {
    try{
        const response = await axios.get(`https://course-api.com/react-store-products?id=${id}`)
        return response.data;
    } catch (error){
        throw new Error(error);
    }
}

export {
    GetAllProducts,
    GetProductById
}