import ProductDetails from "../../components/ProductDetails"
import { ActionTypes } from "../constants/action-types"


const initialState={
    // products: {
    //     id: 101,
    //     title: "mobile",
    //     category: "Electronics"
    // }

    products: []
}


export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            // return state
            return {...state, products:payload}
        case ActionTypes.FETCH_PRODUCTS:
            // return state
            return {...state, products:payload}
            
        default:
            return state
    }
}


export const selectProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
            
        default:
            return state
    }
}


