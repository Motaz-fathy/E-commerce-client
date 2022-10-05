import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import ProductCart from "../productCard";
import {PaginationComponent} from "./pagination";
import { Listproduct } from "../../redux/actions/productAction";
import '../components.css'
const ShopSection = ({ keyword, pagenumber }) => {
 
  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(Listproduct(keyword ,pagenumber));
    },
    [keyword ,pagenumber,  dispatch]
  );
  const GetAllProduct = useSelector(state => state.GetAllProduct)
  const { page, pages } = GetAllProduct
  return (
    <div>
      <div className="center">
        <h3>All products </h3>
      <ProductCart />

      </div>
      <PaginationComponent
        pages={pages}
        page={page}
        keyword={keyword ? keyword : ""}
    />
    </div>
  );
};
export default ShopSection;
