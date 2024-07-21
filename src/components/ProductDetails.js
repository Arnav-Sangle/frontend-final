import react from "react"
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import axios from "axios"
import { fetchProduct, selectedProduct } from "../redux/actions/productActions";
import { setProducts } from '../redux/actions/productActions';
import apiCall from "../apis/apiCall";



function ProductDetails(props) {
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
    const {id, title, category, price, image, description} = product

    const{pid} = useParams()
        // console.log(pid)
    // const URL = `https://fakestoreapi.com/products/${pid}`
    

/*     
    const fetchProduct = async() => {
        // const response = await axios.get(URL)
        const response = await apiCall.get(`/products/${pid}`)
        // console.log(response)
        dispatch(selectedProduct(response.data))
    }

    const redirect = (e) => {
        window.location.href = "https://fakestoreapi.com/products";
    }

    console.log(product)

    useEffect(()=> {
        fetchProduct()
    }, [pid]) 

*/

//using redux-thunk middleware
    useEffect(()=>{
        dispatch(fetchProduct(pid))
    }, [pid])


    return (
        <div className='ui grid container'>
        {/* <button onClick={redirect}> Go </button> */}

            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>AND</div>
                    <div className='middle aligned row'>
                        <div className='column 1p'>
                            <img className='ui fluid image' src={image} />
                        </div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex='0'>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'> 
                                    Add To Cart 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ProductDetails

