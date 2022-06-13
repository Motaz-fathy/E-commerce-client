import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {RegisterAction} from '../redux/actions/userAction'
import "./pages.css";
import Loading from "../components/Loading";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { user , loading , error } = useSelector(state => state.RegisterReducer);
  const nav = useNavigate()
  useEffect(
    () => {
      if (user) {
        console.log(user) 
         nav('/login')
      }
    },
    [user ,nav]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(RegisterAction(username , password , email ))
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
              <h3> sign up now </h3>
              <input
                type={"text"}
                placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                type={"email"}
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type={"password"}
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
               <button className="btn-Auth"> Signup</button>
              <Link to="/login">Iam already have account !</Link>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Register;
