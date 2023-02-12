import React from 'react'

const login = () => {
  return (
    <div className='formcontainer'>
       <div className='formWrapper'>
        <span className="logo">UNItea Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input style={{display:"none"}} type="file" id="file"/>
          
          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
       </div>
    </div>
  )
}

export default login
