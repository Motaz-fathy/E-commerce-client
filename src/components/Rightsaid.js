import React, { useState } from 'react'
import { useNavigate } from 'react-router';

 const Rightsaid = () => {
    const [keyword, setKeyword] = useState("");
    const nav = useNavigate();
  
    
     const handleKeyword = () => {
        if (keyword.trim()) {
          nav(`/search/${keyword}`);
        }
        else {
          nav("/");

        }
     }
  return (
    <div>
       <form onClick={handleKeyword}>
       <button type='button' onClick={e => setKeyword('fundation')}>fundation</button>
       </form>
       <form onClick={handleKeyword}>
       <button type='button' onClick={e => setKeyword('shamwa')}>shamwa</button>
       </form>
       <form onClick={handleKeyword}>
       <button type='button' onClick={e => setKeyword(' ')}>all</button>
       </form>
    </div>
  )
}
export default Rightsaid