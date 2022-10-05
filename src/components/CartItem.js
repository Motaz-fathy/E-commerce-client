import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import {removefromcart} from '../redux/actions/CartAction'
import { useDispatch } from "react-redux";


export const CartItem = ({ item }) => {

  const dispatch = useDispatch()
  const handleremovefromcart = () => {
  dispatch(removefromcart(item.product))
  }
   return (
    <Container maxWidth={"xl"}>
      <Grid container md={12} xs={12} className="cartitembody" key={item._id}>
        <Grid md={6} xs={6} className='leftItems'>
          <img src={`/images/${item.image}`} />
          <h5>{item.name}</h5>
         <input type={'number'} placeholder={item.qty}/>
        </Grid>
        <Grid md={6} xs={6} className='rightItems'>
        <span>{item.price * item.qty}$</span>
        <span></span>
        <span></span>
        <span></span>
        <button onClick={handleremovefromcart}><DeleteIcon />Delete</button>
        <span></span>
        </Grid>
      </Grid>
    </Container>
  );
};
