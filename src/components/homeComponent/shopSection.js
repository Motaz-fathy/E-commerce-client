import React, { useEffect } from "react";
import { useDispatch  } from "react-redux";
import ProductCart from "../productCard";
import Pagination from "./pagination";
import { Listproduct } from "../../redux/actions/productAction";
import '../components.css'
const ShopSection = ({ keyword }) => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(Listproduct(keyword));
    },
    [keyword,  dispatch]
  );
  return (
    <div>
      <div className="center">
        <h3>All products </h3>
      <ProductCart />
        <h3>All products </h3>

      </div>
      <Pagination
      keyword={keyword ? keyword : null}
    />
    </div>
  );
};
export default ShopSection;
