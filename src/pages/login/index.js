import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../common/components/layout/auth"
import { auth, authService } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"
function Login() {
  const navigate = useNavigate()
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [signupError, setSignUpError] = useState("")

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(authService, Email, Password)
      .then(() => {
        navigate("/profile")
      })
      .catch((error) => {
        setSignUpError(error.message)
      })
  }

  return (
    <AuthLayout
      errorMessage={signupError}
      submitText="Login"
      redirectLink="/auth/register"
      redirectLinkText="Register"
      handleSubmit={handleLogin}
    >
      <Input
        autoComplete="Email"
        label="Email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        autoComplete="Password"
        label="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Login
