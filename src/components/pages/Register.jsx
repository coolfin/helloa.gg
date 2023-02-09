import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = () => {
    
    navigate('/login');
  }
  return (
    <>
      <input value={userid} onChange={(e) => setUserId(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>회원가입</button>
    </>
  );
}
