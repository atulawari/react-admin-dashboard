import { AppBar, Box, Button, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";

const drawerWidth=220;
export default function Layout(){
 const navigate=useNavigate();
 const logout=()=>{localStorage.removeItem("admin_auth");navigate("/login");};
 return <Box sx={{display:"flex",minHeight:"100vh",bgcolor:"#f5f6fa"}}>
  <Drawer variant="permanent" sx={{width:drawerWidth,"& .MuiDrawer-paper":{width:drawerWidth,boxSizing:"border-box"}}}>
   <Toolbar><Typography fontWeight={700}>Admin Panel</Typography></Toolbar>
   <List>
    <ListItemButton component={Link} to="/dashboard"><ListItemText primary="Dashboard"/></ListItemButton>
    <ListItemButton component={Link} to="/users"><ListItemText primary="Users"/></ListItemButton>
   </List>
  </Drawer>
  <Box component="main" sx={{flexGrow:1}}>
   <AppBar position="static"><Toolbar sx={{justifyContent:"space-between"}}><Typography variant="h6">React Admin Dashboard</Typography><Button color="inherit" onClick={logout}>Logout</Button></Toolbar></AppBar>
   <Box sx={{p:{xs:2,md:4}}}><Outlet/></Box>
  </Box>
 </Box>;
}