/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, UserDetailsAction } from "../redux/actions/userAction";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export const Navbar = () => {
  const dispatch = useDispatch();
  const LoginReducer = useSelector(state => state.LoginReducer);
  const { user } = LoginReducer;
  const [height, setHeight] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
  };
  const handleUserDetails = () => {
    dispatch(UserDetailsAction());
  };
  const changeBD = () => {
    if (window.scrollY >= 100) {
      setHeight(true);
    } else {
      setHeight(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBD);
  }, []);
  return (
    <div>
      <nav className={height ? "alternav" : ""}>
        <Container>
          <Grid container>
            <Grid md={4} xs={6} className="container">
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <div className="dropmenu">
                    <span>E-commerce</span>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/">
                    <div className="dropmenu">
                      <HomeIcon />{' '} <span> Home</span>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/cart">
                    <div className="dropmenu">
                       <ShoppingCartIcon />{' '} <span> cart</span>
                    </div>
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/contact">
                    <div className="dropmenu">
                    <ShoppingCartIcon />{' '} <span> cart</span>

                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid md={4} xs={1} />
            <Grid md={4} xs={5} className="container">
              <Grid container spacing={2}>
                <Grid item xs={4} />
                <Grid item xs={2} />
                <Grid item xs={4}>
                  <Link onClick={handleUserDetails} to="/profile">
                    {user
                      ? <img src={`./images/profiles/${user.image}`} />
                      : <i className="fa fa-user" />}
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <Link onClick={handleLogout} to="/login">
                    <LockOpenIcon />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </nav>
    </div>
  );
};
