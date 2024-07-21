import apiCall from "../../apis/apiCall";
import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const setProducts = (products)=>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product)=>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

//middleware using redux-thunk
export const fetchProducts = ()=> async(dispatch)=>{
    const response = await apiCall.get('/loadproducts')
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})

}

export const fetchProduct = (pid)=> async(dispatch)=>{
    const response = await apiCall.get(`/loadproducts/${pid}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload:response.data})

}
