/* eslint-disable jsx-a11y/alt-text */
import '../components/components.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import {Navbar} from '../components/Navbar'
import { SingleProductAction } from '../redux/actions/productAction'
import Notfound from './Notfound'
import '../components/components.css'
export const SingleProduct = () => {
const nav = useNavigate()  
const [Qty , setQty]  = useState(0) 
const ProductDetails = useSelector(state => state.ProductDetails)
const {product , loading , error } = ProductDetails 
const dispatch = useDispatch();
const {id} = useParams() 
useEffect(() => {
dispatch(SingleProductAction(id))
} ,[dispatch , id])
const HandleAddtoCart = (e) => {
e.preventDefault()
nav(`/cart/${id}?qty=${Qty}`)
}
  return (
    <div>
     <Navbar />
      <div className='content'>
         {loading ? <Loading /> : null}
         {error ? <><h1><Notfound /></h1></> : product ? 
         <>
         
         <div className='left'>
           <img src={product.image} />
           <div>review</div>
         </div>
         
         <div className='right'>
           <h1 className='productName'> name : {product.name}</h1>
           <h5 className='productDesription'>desription : {product.desription}</h5>
           <h5 className='productCategory'>category : {product.category}</h5>
           <h5 className='productColor'>color : null</h5>
           <h5 className='productPrice'>price : {product.price} $</h5>
           <h5 className='totalPrice'>total Price : {}</h5>
           <form>
             <input type={"number"}
             value={Qty} 
              onChange={
              e => setQty(e.target.value)
             }/>
             <input type={"submit"} value=" add to cart " onClick={HandleAddtoCart}/>
           </form>
         </div></>
         :<Notfound />
         }
       
      </div>
     </div>
  )
}
