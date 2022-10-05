import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/cart";

// pages import here
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Profile from "./pages/Profile";
import Register from "./pages/Register.js";
import { SingleProduct } from "./pages/SingleProduct";
const App = () => {
  const LoginReducer = useSelector(state => state.LoginReducer);
  const { user } = LoginReducer;
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route
            path="/search/:keyword/page/:pageNumber"
            element={<Home />}
            exact
          /> 

          <Route path="/" element={<Home />} exact />

          <Route path="/product" element={<Home />} exact />

          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="/search/:keyword" element={<Home />} exact />

          <Route path="/page/:pagenumber" element={<Home />} exact />

         

          {user
            ? <Route path="/cart" exact element={<Cart />} />
            : <Route path="/profile" exact element={<Notfound />} />}

          {user
            ? <Route path="/profile" exact element={<Profile />} />
            : <Route path="/profile" exact element={<Notfound />} />}

          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
