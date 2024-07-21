import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export const routes=[
    {path:"/" ,element:<ProductList/>},
    {path: "loadproducts/:pid", element:<ProductDetails/>}
    
]
