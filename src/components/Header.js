import { Container, Grid } from '@mui/material';
import './components.css'
import React from 'react'
 const Header = () => {

  
  return (
    <div>
 <header>
  <Container maxWidth={"xl"} className='container'>
   <Grid container className='container '>
    
    <Grid item md={7} xs={12}>
      <h1> Shoping online</h1>
    </Grid>
    <Grid item md={5} xs={12}>
      <div className='img'></div>
    </Grid>
   </Grid>
  </Container>
</header>

    </div>
  )
}
export default Header