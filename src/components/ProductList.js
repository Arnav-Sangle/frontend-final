import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import apiCall from '../apis/apiCall';

// import axios from 'axios'
// const URL = "https://fakestoreapi.com/products/"





function ProductList(props) {
    const products = useSelector(state => state.allProducts)
    // console.log(products)

    const dispatch = useDispatch()

/*     const fetchProducts = async() => {
        // const response = await axios.get(URL)
        const response = await apiCall.get("/products")

        // console.log(response)
        dispatch(setProducts(response.data))
    }
 */
    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
}



export default ProductList;