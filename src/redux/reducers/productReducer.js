import {
  LODDING_PRODUCTS,
  SUCCES_PRODUCTS,
  ERROR_PRODUCTS,
  LODDING_SINGLE_PRODUCT,
  SUCCES_SINGLE_PRODUCT,
  ERROR_SINGLE_PRODUCT
} from "../actions/types";

const initstate = {
  products : [] ,
  pages : null ,
  page : null 
}

export const GetAllProduct = (state = initstate, action) => {
  console.log(action.payload)
  switch (action.type) {
    case LODDING_PRODUCTS:
      return { loading: true , products : []};
    case SUCCES_PRODUCTS:
      return { loading: false, products: action.payload.products , pages : action.payload.pages ,page :  action.payload.page};
    case ERROR_PRODUCTS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductDetails = (state ={ product : {}}, action) => {
  console.log(action.payload)

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

