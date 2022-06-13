/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Listproduct } from "../redux/actions/productAction";
import Loading from '../components/Loading'
import "./components.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const dispatch = useDispatch();
  const {products , error , loading } = useSelector(state => state.GetAllProduct)

  useEffect(
    () => {
      dispatch(Listproduct());
    },
    [dispatch]
  );
  return (
   <div>
          <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className=" row">
              {loading && <Loading />}
            {error && <div className="error"> {error}</div>}

                    {products?.map((product) => (
                      
                        <div
                        className="shop col-lg-4 col-md-6 col-sm-6 "
                        key={product._id}
                      >
                      <div className="card_body">
                      <div className="image">
                      <img src={`../${product.image}`} />
                      </div>
                      <div className="bottom_body">
                      <h5 className="product_name">{product.name}</h5>
                      <h6 className="product_discription"> {product.desription} </h6>
                      <h6 className="product_price">  {product.price} $ </h6>
                      </div>
                      <div> review </div>
                      <Link  to={`/${product._id}`} className="btn-addtocart">Details</Link>
                      
                      </div>
                      </div>
                    ))}
              

              
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </div> 

  )
};
export default ProductCard;
