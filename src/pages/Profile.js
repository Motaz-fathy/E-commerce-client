import React from "react";
import {Navbar} from '../components/Navbar'
import { ShowProfile } from "../components/profileComponent/ShowProfile";
import './pages.css'
const Profile = () => {
  return (
    <div>
      <Navbar />
      <ShowProfile />
      
    </div>
  )
};
export default Profile;
