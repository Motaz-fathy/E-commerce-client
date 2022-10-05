/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import  Loading  from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { SingleProductAction } from "../redux/actions/productAction";
import "../pages/pages.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addToCart } from "../redux/actions/CartAction";
export const SingleProduct = () => {
  const nav = useNavigate();
  const [qty, setQty] = useState(1);
  const ProductDetails = useSelector(state => state.ProductDetails);
  const { product, loading } = ProductDetails;
  const dispatch = useDispatch();
  const { id } = useParams();
  const AddToCartHandle = () => {
    dispatch(addToCart(id, qty));
    nav("/cart");
  };
  useEffect(
    () => {
      dispatch(SingleProductAction(id));
    },
    [dispatch, id]
  );

  return (
    <div>
      <Navbar />
      {loading
        ? <Loading />
        : <Container maxWidth={"xl"}>
            <Grid container className="singlecontainer">
              <Grid container md={6} xs={12}>
                <Grid item md={1} />
                <Grid item md={5}>
                  <div>
                    <img src={`/images/${product.image}`} />
                  </div>
                </Grid>
                <Grid item md={6} />
              </Grid>
              <Grid item md={6} xs={12}>
                <Grid container>
                  <Grid item md={2} />
                  <Grid item md={8} className="datafiled">
                    <div>
                      <div>
                        {product.name}
                        {""} price : {product.price}$
                      </div>
                      <div>
                        description : {product.desription}
                        {""}{" "}
                      </div>
                      <div>
                        {" "}category : {product.category}
                        {""}{" "}
                      </div>
                      <div>
                        {" "}countInStock :{product.countInStock}
                        {""}{" "}
                      </div>
                      <br />
                      <div>
                        total price : {qty * product.price} $
                      </div>
                      <form>
                        <TextField
                          id="filled-number"
                          label="Quntity"
                          type="number"
                          InputLabelProps={{
                            shrink: true
                          }}
                          onChange={e => setQty(e.target.value)}
                          variant="filled"
                          value={qty}
                        />

                        <Button onClick={AddToCartHandle} id="btn-addtocart">
                          {" "}add to cart{" "}
                        </Button>
                      </form>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>}
    </div>
  );
};
