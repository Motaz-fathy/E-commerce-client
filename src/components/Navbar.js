/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, UserDetailsAction } from "../redux/actions/userAction";
import "./components.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
export const Navbar = () => {
  const dispatch = useDispatch();
  const LoginReducer = useSelector(state => state.LoginReducer);
  const { user } = LoginReducer;
  const [height , setHeight] = useState(false)
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleUserDetails = () => {
    dispatch(UserDetailsAction());
  };
  const changeBD = () =>  {
    if(window.scrollY >= 100 )
    {
      setHeight(true)
    }
    else{
      setHeight(false)

    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBD)
  }, [])
  return (
    <div>
      <nav className={height ? "alternav" : ""}>
        <Container maxWidth={"xl"} >
          <Grid container c>
            <Grid container md={4} xs={6} className='container'>
              <Grid item xs={3}>
               E-co
              </Grid>
              <Grid item xs={2}>
                <Link to="/">
                  <i className="fa fa-home" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/cart">
                  <i className="fa fa-shopping-cart" />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link to="/contact">
                  <i className="fa fa-address-card" />
                </Link>
              </Grid>
            </Grid>
            <Grid container md={4}  xs={1}/>
            <Grid container md={4} xs={5} className='container'>
              <Grid item xs={4} />
              <Grid item xs={2} />
              <Grid item xs={4}>
                <Link onClick={handleUserDetails} to="/profile">
                  {user
                    ? <img src={`./images/profiles/${user.image}`} />
                    : <i className="fa fa-user"></i>}
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link onClick={handleLogout} to="/login">
                  <i className="fa fa-sign-out" ></i>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </nav>
    </div>
  );
};
