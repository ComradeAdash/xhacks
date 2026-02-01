// src/Authentication.jsx
import { useState } from "react";
import { auth } from "./firebase";
import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification 
} from "firebase/auth";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await sendEmailVerification(user);

        alert("Account created! Check your email to verify your account.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Account</h2>

      <input 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input 
        type="password" 
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
