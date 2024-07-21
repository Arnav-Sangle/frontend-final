import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

export const routes=[
    {path:"/" ,element:<ProductList/>},
    {path: "product/:pid", element:<ProductDetails/>}
    
]