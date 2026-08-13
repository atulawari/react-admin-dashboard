import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";

export default function Users(){
 const users=useSelector(s=>s.users); const dispatch=useDispatch();
 const [open,setOpen]=useState(false); const [name,setName]=useState(""); const [email,setEmail]=useState("");
 const save=()=>{if(!name||!email)return;dispatch(addUser({name,email,role:"User"}));setName("");setEmail("");setOpen(false);};
 return <><Stack direction="row" justifyContent="space-between" sx={{mb:3}}><Typography variant="h4" fontWeight={700}>Users</Typography><Button variant="contained" onClick={()=>setOpen(true)}>Add User</Button></Stack>
 <Paper><Table><TableHead><TableRow><TableCell>Name</TableCell><TableCell>Email</TableCell><TableCell>Role</TableCell><TableCell>Action</TableCell></TableRow></TableHead><TableBody>{users.map(u=><TableRow key={u.id}><TableCell>{u.name}</TableCell><TableCell>{u.email}</TableCell><TableCell>{u.role}</TableCell><TableCell><Button color="error" onClick={()=>dispatch(removeUser(u.id))}>Delete</Button></TableCell></TableRow>)}</TableBody></Table></Paper>
 <Dialog open={open} onClose={()=>setOpen(false)}><DialogTitle>Add User</DialogTitle><DialogContent><TextField fullWidth label="Name" margin="dense" value={name} onChange={e=>setName(e.target.value)}/><TextField fullWidth label="Email" margin="dense" value={email} onChange={e=>setEmail(e.target.value)}/></DialogContent><DialogActions><Button onClick={()=>setOpen(false)}>Cancel</Button><Button variant="contained" onClick={save}>Save</Button></DialogActions></Dialog></>;
}