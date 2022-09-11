import React from "react";
import { Navbar } from "../components/Navbar";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";
import { Button, Container, Grid } from "@mui/material";
import "./pages.css";
export const Cart = () => {
  const cart = useSelector(state => state.cartReducer);
  const { cartItems } = cart;

  return (
    <div>
      <Container maxWidth={"md"}>
        <Grid container className="cartcontainer">
          <Grid item md={12} xs={12}>
            {cartItems.length === 0
              ? <div> this cart is empty </div>
              : cartItems.map(item => <CartItem item={item} />)}
          </Grid>
          <Grid md={12} xs={12}> 
            <span>
              total price :
              <h4>
                {cartItems
                  .reduce((a, i) => a + i.qty * i.price, 0)
                  .toFixed(2)}
                $
              </h4>
            </span>
          </Grid>
          <Grid md={12} xs={12}>
            <button className="paybtn"> pay </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

/*  */
