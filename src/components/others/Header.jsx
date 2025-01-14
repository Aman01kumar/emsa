import React, { useState } from 'react'

const Header = (props) => { 

  /*const [username, setUsername] = useState('') 

  if(!data){
    setUsername('Admin')
  }else{
    setUsername(data.firstname)
  }
    */

  const logOutUser = () => {
    localStorage.setItem('loggedinUser','')
    props.changeUser('')
    
    //window.location.reload()

  }


  
  return (
    <div className='flex items-end justify-between p-6'>
        <h1 className='text-3xl font-medium'>Hello <br /> <span className='text-5xl font-semibold'> username 😊</span> </h1>
        <button onClick={logOutUser} className='bg-red-600 text-xl font-medium text-white px-5 py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header;

