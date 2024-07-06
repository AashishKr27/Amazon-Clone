/* eslint-disable no-unused-vars */
import axios from "axios";

export async function productsData(){
    try {
        const products = await axios.get("https://fakestoreapi.com/products");
        return products;
    } catch (error) {
        console.error(error);
    }
}