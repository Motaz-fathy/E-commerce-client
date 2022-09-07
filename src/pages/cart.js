import React from "react";
import { Navbar } from "../components/Navbar";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
export const Cart = () => {
  const cart = useSelector(state => state.cartReducer);
  const { cartItems } = cart;
  console.log(cartItems)
  return (
    <div>
      <Container maxWidth={"md"}>
        <Grid container>
          <Grid item md={6}>
            {cartItems.length === 0
              ? <div> this cart is empty </div>
              : cartItems.map(item => <CartItem item={item} />)}
          </Grid>
          <Grid item md={6} ></Grid>
        </Grid>
      </Container>

    </div>
  );
};

/*  */
