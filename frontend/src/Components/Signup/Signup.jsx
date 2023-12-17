import React, { useState } from 'react'
import "../Signup/Signup.scss";


const Signup = () => {
    const [details,setDetailsIn]=useState({
        email:"",
        pass:"",
        confirmr:""
    })
    const handlesign=(event)=>{
       const val=event.target.value;
       const typ=event.target.name;
       setDetailsIn((prev)=>{
           if(typ==="email"){
            return{
            email:val,
            pass:prev.pass,
            confirmr:prev.confirmr
            }
           }
           else if(typ==="password"){
            return{
            email:prev.email,
            pass:val,
            confirmr:prev.confirmr
            }
           }
           else{
            return{
            email:prev.email,
            pass:prev.pass,
            confirmr:val
            }
           }
           
       })
       
    }
    const SubmitDetail=()=>{
        console.log(details);
    }
    console.log(details);
  return (
    <div className='SignupPage'>
    <div class="Signup">
    <form>
    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" style={{margin:"auto"}}/>
    <h1 class="h3 mb-3 fw-normal">Please Create your account</h1>

    <div class="form-floating">
      <input value={details.email} name='email' type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="4p1xue" onChange={handlesign}/>
      <label for="floatingInput" style={{color:"black"}}>Email address</label>
    </div>
    <div class="form-floating">
      <input value={details.pass}name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="53vih" onChange={handlesign}/>
      <label for="floatingPassword" style={{color:"black"}}>Password</label>
    </div>
    <div class="form-floating">
      <input value={details.confirmr} name="ConfirmPassword" type="password" class="form-control" id="Password" placeholder="Password" fdprocessedid="53vih" onChange={handlesign}/>
      <label for="floatingPassword" style={{color:"black"}}>Confirm your Password</label>
    </div>

    <div class="form-check text-start my-3">
      {/* <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label> */}
    </div>
    <button class="btn w-100 py-2" type="submit" fdprocessedid="4fs02j" onClick={SubmitDetail}>Create account</button>
    <p> Already have an account <a href='#'>Sign in</a></p>
    <p class="mt-5 mb-3 text-body-secondary">© Made By TError 404</p>
  </form>
  </div>
    </div>
  )
}

export default Signup