import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[]
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}
export const deleteProductReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionTypes.DELETE_PRODUCT:
            return {...state, products: payload}
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, {type,payload}) => {
    console.log(payload);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}