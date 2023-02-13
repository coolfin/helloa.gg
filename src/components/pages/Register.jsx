import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import awsconfig from "../../service/awsconfig";

import { Amplify, Auth } from "aws-amplify";
import { Authenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);
export default function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (event) => {
    try {
      const { user } = await Auth.signUp({
        username, //로아 닉네임
        password, // 비밀번호
        attributes: {
          name:nickname, // optional
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      navigate('/login')
    } catch (error) {
      console.log("error signing up:", error);
    }
  };
  return (
    <>
      <input
        value={username}
        type="email"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input value={nickname} onChange={(e) => setNickName(e.target.value)} />
      <button onClick={handleSubmit}>회원가입</button>
    </>
  );
}
