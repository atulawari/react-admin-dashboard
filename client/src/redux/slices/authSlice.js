import {createSlice} from '@reduxjs/toolkit';
const saved=localStorage.getItem('user');
const slice=createSlice({name:'auth',initialState:{token:localStorage.getItem('token'),user:saved?JSON.parse(saved):null},reducers:{
setCredentials:(s,a)=>{s.token=a.payload.token;s.user=a.payload.user;localStorage.setItem('token',a.payload.token);localStorage.setItem('user',JSON.stringify(a.payload.user));},
logout:(s)=>{s.token=null;s.user=null;localStorage.removeItem('token');localStorage.removeItem('user');}
}});
export const {setCredentials,logout}=slice.actions;export default slice.reducer;