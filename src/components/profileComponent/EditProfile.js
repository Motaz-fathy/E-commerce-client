import React from 'react'
import '../components.css'
export const EditProfile = () => {
  return (
    <div className='edit'>
     <form>
       <input type={'password'} placeholder="enter old password " />
       <input type={'password'} placeholder="enter new password " />
       <button type='submit'> change </button>
     </form>
    </div>
  )
}
