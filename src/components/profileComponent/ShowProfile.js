import React from 'react'
import {  useSelector } from 'react-redux';
import '../components.css'

export const ShowProfile = () => {
  const LoginReducer = useSelector(state => state.LoginReducer);
  const { user } = LoginReducer;
  return (
    <div>
        <div className='uereInfo'>
          <div className='cover'>
         {user  ? 
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src={`./images/profiles/${user.image}`} /> :
          <i class="fa fa-user"></i>
          }
          {user ?(
           <>
            <h2> <i class="fa fa-user"></i> {user.username}</h2>
            <h5> <i class="fa fa-envelope"></i> {user.email}</h5>
           </>
      
          )
              : ''
          }
          </div>
        </div>
    </div>
  )
}
