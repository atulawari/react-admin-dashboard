import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export default function Dashboard(){
 const users=useSelector(s=>s.users);
 return <><Typography variant="h4" fontWeight={700} gutterBottom>Dashboard</Typography><Typography color="text.secondary" sx={{mb:3}}>Overview of the React admin application.</Typography>
 <Grid container spacing={3}>{[["Users",users.length],["Authentication","Protected"],["UI","Responsive"]].map(([label,value])=><Grid item xs={12} md={4} key={label}><Card><CardContent><Typography color="text.secondary">{label}</Typography><Typography variant="h3" fontWeight={700}>{value}</Typography></CardContent></Card></Grid>)}</Grid></>;
}