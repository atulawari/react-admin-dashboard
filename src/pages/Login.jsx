import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function Login(){
 const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
 const navigate=useNavigate();
 const submit=e=>{e.preventDefault(); if(!email||!password)return setError("Enter email and password."); localStorage.setItem("admin_auth","true");navigate("/dashboard");};
 return <Box sx={{minHeight:"100vh",display:"grid",placeItems:"center",p:2,bgcolor:"#f5f6fa"}}>
  <Paper sx={{p:4,width:"100%",maxWidth:420}} elevation={3}><Typography variant="h4" fontWeight={700} gutterBottom>Admin Login</Typography>
  {error&&<Alert severity="error" sx={{mb:2}}>{error}</Alert>}
  <form onSubmit={submit}><TextField fullWidth label="Email" margin="normal" value={email} onChange={e=>setEmail(e.target.value)}/><TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={e=>setPassword(e.target.value)}/><Button fullWidth variant="contained" size="large" type="submit" sx={{mt:2}}>Login</Button></form>
  </Paper></Box>;
}