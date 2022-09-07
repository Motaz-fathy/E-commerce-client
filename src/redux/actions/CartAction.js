import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./types";

// ADD TO CART
export const addToCart = (id, qty) => async (dispatch , getState) => {
const url = "http://localhost:8000/";

  const { data } = await axios.get(`${url}api/products/${id}`);
  console.log(data ,qty);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product:data._id,
      name:data.name,
      image:data.image,
      price:data.price,
      countInStock:data.countInStock,
      category:data.category,
      qty
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));

};

// REMOVE PRODUCT FROM CART
export const removefromcart = id => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
