import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "../Signin/Signin.scss"

const Signin = () => {
  const navigate=useNavigate();
  const [signInDetails,setSignInDetails]=useState({
    email:"",
    pass:""
  })


  
  const handleSignIn=(event)=>{
    const {name,value}=event.target;

    setSignInDetails((prev)=>{
        if(name==="email"){
            return{
                email:value,
                pass:prev.pass
            }
        }
        else{
            return{
                email:prev.email,
                pass:value
            }
        }
    })

  }
  console.log(signInDetails);


  const UserLogin=async()=>{
    try{
      const response=await axios.post('http://localhost:3000/auth/login',{
       email:signInDetails.email,
       password:signInDetails.pass,
      });

      localStorage.setItem('token',response.data.token);
      console.log("sign in successful:",response.data);
      alert("signin successfull");
      navigate('/Home');
    }catch(error){
     console.error("signin failed",error.message)
     alert("signin failed: user does not exist")
    }
 }

  return (
    <div className='SigninPage'>
    <div class="Signin">
    <form>
    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" style={{margin:"auto"}}/>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="4p1xue" onChange={handleSignIn}/>
      <label for="floatingInput" /*style={{color:"black"}}*/>Email address</label>
    </div>
    <div class="form-floating">
      <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="53vih" onChange={handleSignIn}/>
      <label for="floatingPassword" /*style={{color:"black"}}*/>Password</label>
    </div>
    

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn w-100 py-2" type="button" fdprocessedid="4fs02j" onClick={UserLogin}>Sign in</button>
    <p> New to website <a href='#'>Sign up</a></p>
    <p class="mt-5 mb-3 text-body-secondary">© Made By TError 404</p>
  </form>
  </div>
    </div>
  )
}

export default Signin;