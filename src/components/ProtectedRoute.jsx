import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoute(){ return localStorage.getItem("admin_auth") ? <Outlet/> : <Navigate to="/login" replace/>; }