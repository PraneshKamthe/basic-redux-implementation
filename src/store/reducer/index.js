import { combineReducers } from "redux";
import { deleteProductReducer, productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    deleteProduct : deleteProductReducer
})

export default reducers;