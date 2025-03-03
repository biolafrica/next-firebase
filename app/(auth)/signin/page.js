import AuthForm from "@/app/components/pages/authForm"

export default function SignInPage(){
  return(
    <main>
      <h2 style={{textAlign: "center"}}>SignIn</h2>
      <AuthForm form= "signin" />
    </main>
  )
    
  
}