import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {LoginAction} from '../redux/actions/userAction'
import "./pages.css";
import Loading from '../components/Loading'
const Register = () => {
  window.scrollTo(0, 0);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate()
  const {user ,loading , error} = useSelector((state) => state.LoginReducer)
  useEffect(
    () => {
      if (user) {
         nav('/')
      }
      else {
        nav('/login')
      }
    },
    [user ,nav]
  );
  const handleSubmit = (e) => {
   e.preventDefault();
   dispatch(LoginAction( password , email ))
  }
  return (
    <div>
      <section className="background">
        <section className="left" />
        <section className="right">
          <div className="signup-card">
            
            <form onSubmit={handleSubmit} method="POST">
            {loading && <Loading />}
            {error && <div className="error"> {error}</div>}
              <h3> Login  </h3>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
             <button className="btn-Auth"> Login</button>
              <Link to="/register">create your account !</Link>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Register;
