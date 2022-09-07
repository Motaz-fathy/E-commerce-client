import {combineReducers} from 'redux'
import {GetAllProduct ,ProductDetails} from './productReducer'
import { RegisterReducer ,LoginReducer ,userDetailsReducer } from './UserReducer'
import {cartReducer} from './CartReducer'
export const Reducers = combineReducers({
    GetAllProduct ,
    LoginReducer ,
    RegisterReducer ,
    userDetailsReducer,
    ProductDetails,
     cartReducer
})