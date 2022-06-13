import axios from "axios";
import {
  ERROR_PRODUCTS,
  LODDING_PRODUCTS,
  SUCCES_PRODUCTS,
  ERROR_SINGLE_PRODUCT, 
  SUCCES_SINGLE_PRODUCT,
  LODDING_SINGLE_PRODUCT
} from "./types";

const url = "http://localhost:8000/";

export const Listproduct = (keyword = " ") => async dispatch => {
  try {
    dispatch({
      type: LODDING_PRODUCTS
    });
    const { data } = await axios.get(`${url}api/products?keyword=${keyword}`);

    dispatch({
      type: SUCCES_PRODUCTS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCTS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const SingleProductAction = id => async dispatch => {
  try {
    dispatch({
      type: LODDING_SINGLE_PRODUCT
    });
    const { data } = await axios.get(`${url}api/products/${id}`);
    console.log(data)
    dispatch({
      type: SUCCES_SINGLE_PRODUCT,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR_SINGLE_PRODUCT,
      payload:
        error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
