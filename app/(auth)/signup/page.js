import AuthForm from "@/app/components/pages/authForm"

export default function SignUpPage(){
  return(
    <main>
      <h2 style={{textAlign: "center"}}>Signup</h2>
      <AuthForm form= "signup" />
    </main>
  )
 
}