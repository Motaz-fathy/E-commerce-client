import {
  LODDING_PRODUCTS,
  SUCCES_PRODUCTS,
  ERROR_PRODUCTS,
  LODDING_SINGLE_PRODUCT,
  SUCCES_SINGLE_PRODUCT,
  ERROR_SINGLE_PRODUCT
} from "../actions/types";


export const GetAllProduct = (state = {products : []}, action) => {
  switch (action.type) {
    case LODDING_PRODUCTS:
      return { loading: true , products : []};
    case SUCCES_PRODUCTS:
      return { loading: false, products: action.payload.products };
    case ERROR_PRODUCTS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetails = (state = {}, action) => {
  switch (action.type) {
    case LODDING_SINGLE_PRODUCT:
      return { loading: true , product : {}};
    case SUCCES_SINGLE_PRODUCT:
      return { loading: false, product: action.payload };
    case ERROR_SINGLE_PRODUCT:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

