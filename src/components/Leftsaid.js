/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./components.css";
import {logout , UserDetailsAction} from '../redux/actions/userAction'
const Leftsaid = () => {
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
    <div className="container ">
      <div className="center_block">
        <div className="sub_center_block">
          <img
            src={
              user
                ? `./images/profiles/${user.image} `
                : `./images/profiles/profile.png`
            }
          />
          <h4>
            {user ? user.username : ""}
          </h4>
        </div>
        <div className="sub_center_block_links">
          {user
            ? <>
                <Link onClick={handleUserDetails} to="/profile"><i className="fa fa-user"></i></Link>
                <Link to="/cart"><i className="fa fa-shopping-cart" ></i></Link>
                <Link onClick={handleLogout} to="/login"><i className="fa fa-sign-out" ></i></Link>
              </>
            : <>
                <Link to="/cart"><i className="fa fa-shopping-cart" ></i></Link>
                <Link to="/register"><i className="fa fa-plus"></i></Link>
                <Link to="/login"><i className="fa fa-sign-in" ></i></Link>
              </>}
        </div>
      </div>
    </div>
  );
};

export default Leftsaid;
