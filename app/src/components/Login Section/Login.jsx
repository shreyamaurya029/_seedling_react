import React from 'react'

function Login() {
  return (
    <div>
         <form>
            <label> Enter your name: <input type="text" name="first-name" required placeholder="name"/></label>
            <label> Enter your e-mail: <input type="text" name="email" required placeholder="email"/></label>
            <label> Password: <input type="text" name="password" min="6" required placeholder="password"/></label>
            <input type="submit" value="Submit" />
            <input type="warning" value="already registered?? Login!"/>

    </form> 
    </div>
  )
}

export default Login