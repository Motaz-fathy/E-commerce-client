import React from "react";
import {Navbar} from '../components/Navbar'
import { EditProfile } from "../components/profileComponent/EditProfile";
import { ShowProfile } from "../components/profileComponent/ShowProfile";
import './pages.css'
const Profile = () => {
  return (
    <div>
      <Navbar />
      <ShowProfile />
      
      <EditProfile />
    </div>
  )
};
export default Profile;
