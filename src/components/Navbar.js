/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { logout, UserDetailsAction } from "../redux/actions/userAction";
import "./components.css";

export const Navbar = () => {
  const dispatch = useDispatch()
  const LoginReducer = useSelector(state => state.LoginReducer);
  const { user } = LoginReducer;
  const handleLogout = () => {
    dispatch(logout())
  }
  const handleUserDetails = () => {
    dispatch(UserDetailsAction())
  }
  return (
<div>
<nav>
  <div className="container">
    <div className="left">
      <h5>E-co</h5>
      <Link to="/"><i className="fa fa-home"></i></Link>
      <Link to="/cart"><i className="fa fa-shopping-cart" ></i></Link>
      <Link to="/contact"><i className="fa fa-address-card" ></i></Link>
    </div>
    <div className="right">
   
    <Link onClick={handleUserDetails} to="/profile">{user  ? 
     <img src={`./images/profiles/${user.image}`} /> :
     <i className="fa fa-user"></i>
        }</Link>
    <Link onClick={handleLogout} to="/login"><i className="fa fa-sign-out" ></i></Link>
    </div>
  </div>
</nav>
</div>
  );
};
