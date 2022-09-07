import React from 'react'

import { Grid } from '@mui/material';
import { Container } from '@mui/system';

export const CartItem = ({item}) => {
 
  return (
    <Container maxWidth={"xl"}>
         <Grid container md={12}>
            <Grid item md={3}>{item.name}</Grid>
            <Grid item md={3}>{item.price}</Grid>
            <Grid item md={3}>{item.qty}</Grid>
            <Grid item md={3}>delete</Grid>
         </Grid>
    </Container>
  )
}
