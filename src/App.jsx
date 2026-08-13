import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route element={<ProtectedRoute/>}>
      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
      </Route>
    </Route>
    <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
    <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
  </Routes>;
}