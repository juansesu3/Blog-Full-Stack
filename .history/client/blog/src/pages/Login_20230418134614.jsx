import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <span>Don't you have an account? </span>
      </form>
      </div>
  )
}

export default Login