"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
import signIn from "@/app/firebase/auth/signin";
import signUp from "@/app/firebase/auth/signup";


export default function AuthForm({form = "signin"}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]= useState("");
  const router = useRouter();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setErrorMessage("")
    if(form === "signin"){

      const { result, error } = await signIn(email, password);

      if (error) {
        console.log(error)
        return setErrorMessage(error.message)
      
      }else{
        console.log(result)
        return router.push("/admin")
      }
  
    }else{
      const { result, error } = await signUp(email, password);
      if (error) {
        console.log(error)
        return setErrorMessage(error.message)
      }else{
        console.log(result)
        return router.push("/admin")
      }
    }

  }

  return(
    <form onSubmit={handleSubmit}>

      <label>
        <span>Email:</span>
        <input 
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          name="email"
          id="email"
          required
        />
      </label>

      <label>
        <span>Password:</span>
        <input 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          name="password"
          id="password"
        />
      </label>

      {errorMessage && <div className="error">{errorMessage}</div>}


      <button type="submit" className="btn-primary">
        {form ==="signin" ? <span>Sign In</span> :<span>Sign up</span>}
      </button>

    </form>
  )
}