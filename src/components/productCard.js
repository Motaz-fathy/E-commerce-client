/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Listproduct } from "../redux/actions/productAction";
import Loading from '../components/Loading'
import "./components.css";
import { Link } from "react-router-dom";
import {Container , Grid} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button , CardActions } from '@mui/material';
const ProductCard = () => {


  const dispatch = useDispatch();
  const {products , error , loading } = useSelector(state => state.GetAllProduct)

  useEffect(
    () => {
      dispatch(Listproduct());
    },
    [dispatch]
  );
  return (
   <div>

              {loading && <Loading />}
            {error && <div className="error"> {error} </div>}

           
             <Container maxWidth={'md'} spacing={3}>
              <Grid container >
              {products.map((product) => (
                
                <Grid item md={4} xl={3} sm={12}  xs={12}>
<Card className="product_card" minWidth ={{ minWidth: 200 } } key={product._id}>
      <CardActionArea href={`/${product._id}`}>
        <CardMedia 
          component="img"
          height="250"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">{product.desription}
          </Typography>
          <Typography variant="body2" color="text.secondary">{product.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={`/${product._id}`} size="small" id="detalis-btn" >
          Details
        </Button>
      </CardActions>
    </Card>
                </Grid>
              )
                )}
              </Grid>
             </Container>
           
              

              

     
      </div> 

  )
};
export default ProductCard;

/*          {products?.map((product) => (
                      
                        <div
                        className="shop col-lg-4 col-md-6 col-sm-6 "
                        key={product._id}
                      >
                      <div className="card_body">
                      <div className="image">
                      <img src={`../${product.image}`} />
                      </div>
                      <div className="bottom_body">
                      <h5 className="product_name">{product.name}</h5>
                      <h6 className="product_discription"> {product.desription} </h6>
                      <h6 className="product_price">  {product.price} $ </h6>
                      </div>
                      <div> review </div>
                      <Link  to={`/${product._id}`} className="btn-addtocart">Details</Link>
                      
                      </div>
                      </div>
                    ))} */