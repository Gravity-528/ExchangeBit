import React from 'react'
import "../Signin/Signin.scss"

const Signin = () => {
  return (
    <div className='SigninPage'>
    <div class="Signin">
    <form>
    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" style={{margin:"auto"}}/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="4p1xue"/>
      <label for="floatingInput" style={{color:"black"}}>Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="53vih"/>
      <label for="floatingPassword" style={{color:"black"}}>Password</label>
    </div>
    

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn w-100 py-2" type="submit" fdprocessedid="4fs02j">Sign in</button>
    <p> New to website <a href='#'>Sign up</a></p>
    <p class="mt-5 mb-3 text-body-secondary">© Made By TError 404</p>
  </form>
  </div>
    </div>
  )
}

export default Signin