import axios from 'axios'
import {ADD_TO_CART , REMOVE_TO_CART} from './types'

export const AddtocartAction = async (product , Qty) => (dispatch , getState) => {

    const {data} = axios.post()
    dispatch({
        type : ADD_TO_CART ,
        payload : data
    })
}