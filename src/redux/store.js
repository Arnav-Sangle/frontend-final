import {combineReducers} from "redux"
import {productReducer, selectProductReducer} from "./reducers/productReducer"

const rootReducer = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
})

export default rootReducer